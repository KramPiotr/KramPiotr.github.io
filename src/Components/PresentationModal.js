import React from 'react';
import ReactPlayer from 'react-player';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';


function PresentationModal(props) {
  
    const data = props.data;
  
    return ( 
      <> 
        <Card>
          <Card.Header closeButton>
            <div class="project__title">
              <Card.Title><h2 className="project__title__text">{data.name}</h2></Card.Title>
            </div>
          </Card.Header>
          <Card.Body>
            <div className="project__body">
              <div className="row">
                <div className="col" style={{marginBottom: "1rem"}}>
                  {
                    ((!!data.video) &&                 
                    (
                      <div className="project__player__wrapper">
                        <ReactPlayer url={data.video} className="project__player" width="100%" height="100%"/> 
                      </div>
                    )) ||
                    (
                      <div className="project__image__wrapper">
                        <img src={"images/projects/" + data.inside_photo} alt={data.name +" image 2"} className="project__player" width="100%" height="100%"/> 
                      </div>
                    )
                  }
                </div>
                <div className="col">
                  <div className="project__description" align="justify">
                    {data.description}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="project__technologies">
                     Technologies I used: <span className="font-weight-bold">{data.technologies} </span>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="social-icons project__icons">
              {!!data.extralink &&
              <a href={data.extralink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLink} />
              </a>}
            </div>
            <div className="project__date">
              {data.date}
            </div>
          </Card.Footer>
        </Card>
      </>
    );
  }

  export default PresentationModal;