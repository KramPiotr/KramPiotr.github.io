import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.experience = props.experience;
  }

  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>
          {
            this.experience.map((exp, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{exp.position}</h3>
                  <div className="subheading mb-0">{exp.organization}</div>
                  {
                    exp.team && <div className="subsubheading mb-3">{exp.team} Team</div>
                  }
                  {
                    !exp.team && <div className="subsubheading mb-3"></div>
                  }
                  {
                    exp.aboutWork.split("\n").map((item, i) => {
                      if (!item.length) {
                        return null;
                      }
                      return <p key={i} className="list-item mb-0">
                        <div class="row">
                          <div class="col-sm-auto"><FontAwesomeIcon icon={faCheck} color="#eb3102" /></div>
                          <div class="col">
                            {item}
                          </div>
                        </div>
                      </p>;
                    })
                  }
                </div>
                <div className="resume-date text-md-right mt-3">
                  <span className="text-primary">{exp.fromDate} - {exp.toDate}</span>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Experience;
