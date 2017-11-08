import React from 'react';
import BannerHeader from './BannerHeader.js'
import BannerParagraphLeft from './BannerParagraphLeft';
import BannerParagraphRight from './BannerParagraphRight';
const classnames = require('classnames');

const about_placeholder_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae odio lacus. Sed erat lectus, egestas pulvinar molestie ut, rutrum id orci. Curabitur vulputate imperdiet enim vel efficitur. Proin accumsan volutpat turpis, id rutrum dui pulvinar eu. Integer at venenatis dui. Vestibulum fermentum ipsum sit amet dolor tristique ultricies. Maecenas dictum porta iaculis. Cras at aliquet dolor. Mauris ac vehicula tortor, eu tincidunt dolor. Maecenas dolor libero, dignissim vitae sagittis eget, efficitur eget nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."

const Banner = (props) => (
  <div className={props.classes}>
    <BannerHeader text={props.text}/>
    <BannerParagraphLeft text={about_placeholder_text}/>
    <BannerParagraphRight text={about_placeholder_text}/>
    <BannerParagraphLeft text={about_placeholder_text}/>
  </div>
)
export default Banner;
