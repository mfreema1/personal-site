import React from 'react';
const classnames = require('classnames');

const BannerHeader = (props) => (
  <div className={classnames("heavy_text", "section_header", "right_margin")}>
    <p>{props.text}</p>
  </div>
)

export default BannerHeader;
