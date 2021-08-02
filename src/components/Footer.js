import React from 'react';

import "./styles/Footer.css";
import logo from '../images/project.svg';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="container-fluid">
          <div className="Footer__brand">
            <span className="fw-bold">All rights reserved</span>
            <span className="fw-bold">GitHub: @FreddyJuniorCampos</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;