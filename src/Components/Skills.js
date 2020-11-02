import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCertificate } from "@fortawesome/free-solid-svg-icons";


class Skills extends Component {
  constructor(props){
    super(props);
    this.skills = props.skills;
    for (let section in this.skills){
      if(section === "certificates"){
        continue;
      }
      this.skills[section].sort((s1, s2) => s1.name > s2.name ? 1 : -1)
    }
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">Certificates</div>
          <div className="row">
          {
            this.skills.certificates.map((data, index) => (
              <div key={index} className="col-6">
                <p className="list-item">
                <div class="row">
                <div class="col-sm-auto"><FontAwesomeIcon icon={faCertificate} color="#eb3102" /></div>
                <div class="col">
                <div class="row">{data.name}</div>
                {!!data.organization && <div class="row small text-secondary">Issuing organization: &nbsp;<span className="font-weight-bold"> {data.organization}</span></div>}
                {!!data.credentialID && <div class="row small text-secondary">Credential ID: &nbsp;<span className="font-weight-bold"> {data.credentialID}</span></div>}
                {!!data.description && <div class="row small text-secondary">Description: &nbsp;<span className="font-weight-bold" style={{maxWidth: "300px"}}> {data.description}</span></div>}
                </div>
                </div>
                </p>
              </div>
            ))
          }
          </div>
          <div className="subheading mt-2 mb-3">Programming Languages &amp; Frameworks</div>
          <div className="row">
          {
            this.skills.languagesAndFrameworks.map((data, index) => (
              <div key={index} className="col-6">
                <p className="list-item">
                <div class="row">
                <div class="col-sm-auto"><FontAwesomeIcon icon={faCheckCircle} color="#eb3102" /></div>
                <div class="col">{data.name}</div>
                </div>
                </p>
              </div>
            ))
          }
          </div>
          <div className="subheading mt-4 mb-3">Paradigms &amp; Tools</div>
          <div className="row">
          {
            this.skills.paradigmsAndTools.map((data, index) => (
              <div key={index} className="col-6">
                <p className="list-item">
                  <div class="row">
                  <div class="col-sm-auto"><FontAwesomeIcon icon={faCheckCircle} color="#eb3102" /></div>
                  <div class="col">{data.name}</div>
                  </div>
                </p>
              </div>
            ))
          }
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
