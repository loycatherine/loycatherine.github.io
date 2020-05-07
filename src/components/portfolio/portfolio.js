import DimmerTrigger1 from './DimmerTrigger1.js';
import DimmerTrigger2 from './DimmerTrigger2.js';
import DimmerTrigger3 from './DimmerTrigger3.js';
import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <DimmerTrigger1/>
              <DimmerTrigger2/>
              <DimmerTrigger3/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
