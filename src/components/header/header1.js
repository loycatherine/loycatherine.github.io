import React, { Component } from 'react';
import './video.css'

export default class Header1 extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
        <div class="ccc">
          <video id="video" autoPlay muted loop playsInline>
              <source src="/images/Night Sky_Trim.mp4" type="video/mp4"/>
          </video>
          <div className="words">
            <h1>Hi</h1>
            <p>blah</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}