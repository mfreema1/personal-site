import React from 'react';
import BarItem from './BarItem.js'
const classnames = require('classnames');

const iconStyle = {
  height: 25,
  width: 25
}

const BarTop = (props) => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">Mark Freeman</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item ml-4">
          <a className="nav-link" href="#">Welcome</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Say Hi</a>
        </li>
      </ul>
      <a className="text-hide mr-4" href="https://github.com/mfreema1">
        <img src="GitHub-Mark-Light-64px.png" style={iconStyle} alt=""/>
      </a>
      <a  className="text-hide mr-3" href="https://www.linkedin.com/in/mark-freeman-47b582130/">
        <img src="In-White-66px-R.png" style={iconStyle} alt=""/>
      </a>
    </div>
  </nav>
)
export default BarTop;
