import React from 'react';
const classnames = require('classnames');

const Splash = (props) => (
  <div>
    <img className={classnames("splash", props.classes)} src={props.source} alt=""/>
  </div>
)
export default Splash;
