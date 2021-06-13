import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from 'react-player';


class Presentations extends Component {
  constructor(props) {
    super(props);
    this.presentations = props.presentations;
    this.description = [
        {name: "Link", key: "url"},
        {name: "Conference", key: "name"},
        {name: "Date", key: "date"},
        {name: "Location", key: "location"},
    ]
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="presentations">
        <div className="w-100">
          <h2 className="mb-5">Presentations</h2>
          <ul className="fa-ul mb-0 ml-0">
          {
            this.presentations.map((data, index) => (
              <li key={index}>
                <div class="row">
                <div class="col-sm-auto"><FontAwesomeIcon icon={faHeadset} color="#eb3102" /></div>
                <div class="col">
                <div class="row">{data.title}</div>
                <div>
                  <ReactPlayer url={data.video}/> 
                </div>
                {
                   this.description.map((descr, index) => (
                    <div class="row small text-secondary">
                        <div style={{width: "70px"}}>{descr.name}</div>
                        <div class="col-sm-auto">:</div>
                        <div class="col-sm"><span className="font-weight-bold"> {data[descr.key]}</span></div>
                    </div>
                   ))
                }
                </div>
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

export default Presentations;
