import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from "@fortawesome/free-solid-svg-icons";


class Awards extends Component {
  constructor(props) {
    super(props);

    this.awards = props.awards;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0 ml-0">
          {
            this.awards.university.map((data, index) => (
              <li key={index}>
                <div class="row">
                <div class="col-sm-auto"><FontAwesomeIcon icon={faAward} color="#eb3102" /></div>
                <div class="col"><span className="font-weight-bold"> {data.awardDetail} </span></div>
                </div>
              </li>
            ))
          }
          {
            this.awards.earlier.map((data, index) => (
              <li key={index + this.awards.university.length}>
                <div class="row">
                <div class="col-sm-auto"><FontAwesomeIcon icon={faAward} color="#eb3102" /></div>
                <div class="col">{data.awardDetail}</div>
                </div>
              </li>
            ))
          }
          </ul>
        </div>
      </section>
    );
  }
}

export default Awards;
