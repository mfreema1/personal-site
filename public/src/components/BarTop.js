import React from 'react';
import BarItem from './BarItem.js'
const classnames = require('classnames');

const BarTop = (props) => (
  <div className="bar_top">
    <BarItem text="Welcome" classes="first_tab"/>
    <BarItem text="About" classes="second_tab"/>
    <BarItem text="Say Hi" classes={classnames("third_tab")}/>
  </div>
)
export default BarTop;
