import React from 'react';
const classnames = require('classnames');

const BarItem = (props) => (
  <div className={classnames("bar_item", "heavy_text", props.classes)}>{props.text}</div>
)
export default BarItem;
