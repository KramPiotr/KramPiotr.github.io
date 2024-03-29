import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import "./Landing.css";
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <div className="row" style={{justifyContent: "flex-start"}}>
             <div className="col my-col" align="justify" style={{maxWidth: "700px", minWidth: "390px", marginBottom: "3rem"}}>
              <h1 className="mb-0">{this.landingData.firstName}
                <span className="ml-2 text-primary">{this.landingData.lastName}</span>
              </h1>
              <div className="subheading mb-5 ml-1">
                <a href={"mailto:" + this.landingData.email}>{this.landingData.email}</a>
              </div>
              <p className="lead mb-5" style={{maxWidth: "600px"}}>{this.landingData.bio}</p>
              <div className="social-icons">
                <a href={this.landingData.linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href={this.landingData.github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href={this.landingData.twitter} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a href={this.landingData.devpost} target="_blank" rel="noopener noreferrer">
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="devpost" class="svg-inline--fa fa-w-14 " 
                  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="40 30 190 180">
                    <g id="XMLID_1_">
                      <path id="XMLID_6_" d="M133.7,76H118v90h14.7c30.9,0,45.1-18.1,45.1-45C177.8,90.9,164.9,76,133.7,76z"/>
                      <path id="XMLID_9_" d="M210.2,0H70.1L0,121l70.1,121h140.1l70.1-121L210.2,0z M132.7,195H89V47h45.8c42.1,0,73.3,20.1,73.3,74
                        C208.1,172.8,170.6,195,132.7,195z"/>
                    </g>
                  </svg>
                </a>
                <a href="cv.html" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFileDownload} />
                </a>
              </div>
            </div>
            <div className="col my-col" style={{maxWidth: "400px"}}> 
              <img src="images/landing/smile.jpg" alt="smile" class="my-image" style={{width: "400px", borderRadius: "50%"}}/> 
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
