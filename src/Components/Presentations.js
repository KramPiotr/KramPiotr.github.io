import React, { Component } from 'react';
import PresentationModal from './PresentationModal';


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
          <div className="projects">
          {
            this.presentations.map((data, index) => (
              <PresentationModal data={data} />
            ))
          }
          </div>
        </div>
      </section>
    );
  }
}

export default Presentations;
