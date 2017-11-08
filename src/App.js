import React, { Component } from 'react';
import './App.css';
import $ from "jquery";
import Splash from './components/Splash.js';
import BarTop from './components/BarTop.js';
import Banner from './components/Banner.js';
const classnames = require('classnames');

class App extends Component {
  render() {
    return (
      <div className="App">
        <BarTop />
        <Splash source="placeholder.png" classes="welcome_splash"/>
        <Banner text="About" classes="about_section"/>
        <Banner text="Say Hi" classes="say_hi_section"/>
      </div>
    );
  }
}

const ContentBox = (props) => (
  <div className={classnames("content_box")}>
    <span>Placeholding text</span>
    <CircularImage className="shadow" source={"placeholder.png"}/>
  </div>
)

const CircularImage = (props) => (
  <div className={classnames("circle_crop")}>
    <img src={props.source} className="circle_image" alt=""/>
  </div>
)

$(window).on('scroll', function() {
  console.log(window.pageYOffset);
});
$(document).ready(function() {
  $('.first_tab').click(function(e) {
    $('html, body').animate( {
      scrollTop: $(".welcome_splash").offset().top
    }, 500);
  });
  $('.second_tab').click(function(e) {
    //scroll to the top of the about section in 1 second
    $('html, body').animate( {
      scrollTop: $(".about_section").offset().top
    }, 750);
  });
  $('.third_tab').click(function(e) {
    //scroll to the top of the contact section
    $('html, body').animate( {
      scrollTop: $(".say_hi_section").offset().top
    }, 1000);
  });
});
export default App;
