import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function PresentationModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const description = [
    { name: "Original Title", key: "original_title" },
    { name: "Conference", key: "conference" },
    { name: "Location", key: "location" },
  ];

  const data = props.data;
  return (
    <>
      <div onClick={handleShow} className="portfolio__item">
        <img src={"images/presentations/" + data.photo} alt={data.title + " image"} className="portfolio__img" />
        <h2 className="portfolio__img__text">{data.short_title}</h2>
      </div>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <div class="project__title">
            <Modal.Title><h2 className="project__title__text">{data.short_title}</h2></Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="project__body">
            <div className="row">
              <div className="col" style={{ marginBottom: "1rem" }}>
                {
                  ((!!data.video) &&
                    (
                      <div className="project__player__wrapper">
                        <ReactPlayer url={data.video} className="project__player" width="100%" height="100%" />
                      </div>
                    ))
                }
              </div>
              <div className="col">
                <div className="project__description" align="justify" style={{marginBottom: "10px"}}>
                  {data.description}
                </div>
                {
                  description.map((descr, index) => (
                    <div class="row small text-dark" style={{paddingLeft: "15px", paddingRight: "15px"}}>
                      <div style={{ width: "80px" }}>{descr.name}</div>
                      <div class="col-sm-auto">:</div>
                      <div class="col-sm"><span className="font-weight-bold"> {data[descr.key]}</span></div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="social-icons project__icons">
            {!!data.url &&
              <a href={data.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLink} />
              </a>}
          </div>
          <div className="project__date">
            {data.date}
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PresentationModal;