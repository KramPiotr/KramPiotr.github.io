import React, { Component, useState } from 'react';
import ReactPlayer from 'react-player';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from '@fortawesome/free-solid-svg-icons';

function ProjectModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const item=props.item

  return ( 
    <> 
      <div onClick={handleShow} className="portfolio__item">
        <img src={"images/projects/" + item.photo} alt={item.name +" image"} className="portfolio__img"/>
        <h2 className="portfolio__img__text">{item.name}</h2>
      </div>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <div class="project__title">
            <Modal.Title><h2 className="project__title__text">{item.name}</h2></Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="project__body">
            <div className="row">
              <div className="col" style={{marginBottom: "1rem"}}>
                {
                  ((!!item.video) &&                 
                  (
                    <div className="project__player__wrapper">
                      <ReactPlayer url={item.video} className="project__player" width="100%" height="100%"/> 
                    </div>
                  )) ||
                  (
                    <div className="project__image__wrapper">
                      <img src={"images/projects/" + item.inside_photo} alt={item.name +" image 2"} className="project__player" width="100%" height="100%"/> 
                    </div>
                  )
                }
              </div>
              <div className="col">
                <div className="project__description" align="justify">
                  {item.description}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="project__technologies">
                   Technologies I used: <span className="font-weight-bold">{item.technologies} </span>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="social-icons project__icons">
            {!!item.github &&
            <a href={item.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>}
            {!!item.devpost &&
            <a href={item.devpost} target="_blank" rel="noopener noreferrer">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" class="svg-inline--fa fa-w-14 " 
              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="40 30 190 180">
                <g id="XMLID_1_">
                  <path id="XMLID_6_" d="M133.7,76H118v90h14.7c30.9,0,45.1-18.1,45.1-45C177.8,90.9,164.9,76,133.7,76z"/>
                  <path id="XMLID_9_" d="M210.2,0H70.1L0,121l70.1,121h140.1l70.1-121L210.2,0z M132.7,195H89V47h45.8c42.1,0,73.3,20.1,73.3,74
                    C208.1,172.8,170.6,195,132.7,195z"/>
                </g>
              </svg>
            </a>}
            {!!item.extralink &&
            <a href={item.extralink} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLink} />
            </a>}
          </div>
          <div className="project__date">
            {item.date}
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

class Projects extends Component {
  constructor(props) {
    super(props);
    this.projects = props.projects;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
        <div className="w-100">
          <h2 className="mb-5">Portfolio</h2>
          <div className="portfolio">
            {this.projects.map((item, index) => (
              <ProjectModal item={item}/>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;