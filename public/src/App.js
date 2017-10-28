import React, { Component } from 'react';
import './App.css';
import $ from "jquery";
var classnames = require('classnames');

const about_placeholder_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae odio lacus. Sed erat lectus, egestas pulvinar molestie ut, rutrum id orci. Curabitur vulputate imperdiet enim vel efficitur. Proin accumsan volutpat turpis, id rutrum dui pulvinar eu. Integer at venenatis dui. Vestibulum fermentum ipsum sit amet dolor tristique ultricies. Maecenas dictum porta iaculis. Cras at aliquet dolor. Mauris ac vehicula tortor, eu tincidunt dolor. Maecenas dolor libero, dignissim vitae sagittis eget, efficitur eget nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."

class App extends Component {
  render() {
    return (
      <div className="App">
        <BarTop />
        <Splash source="splash_candidate_4_rev_1.jpg" classes="welcome_splash"/>
        <Banner text="About" classes="about_section"/>
        <Banner text="Say Hi" classes="say_hi_section"/>
      </div>
    );
  }
}

const BarTop = (props) => (
  <div className="bar_top">
    <BarItem text="Welcome" classes="first_tab"/>
    <BarItem text="About" classes="second_tab"/>
    <BarItem text="Say Hi" classes={classnames("right_margin", "third_tab")}/>
  </div>
)

const ContentBox = (props) => (
  <div className={classnames("inlined")}>
    <p>Placeholding text</p>
    <CircularImage className= "shadow" source={"placeholder.png"}/>
  </div>
)

const CircularImage = (props) => (
  <div className={classnames("circle_crop")}>
    <img src={props.source} className="circle_image"/>
  </div>
)

const BarItem = (props) => (
  <div className={classnames("bar_item", "heavy_text", props.classes)}>{props.text}</div>
)

const Banner = (props) => (
  <div className={props.classes}>
    <BannerHeader text={props.text}/>
    <BannerParagraphLeft text={about_placeholder_text}/>
    <BannerParagraphRight text={about_placeholder_text}/>
    <BannerParagraphLeft text={about_placeholder_text}/>
  </div>
)

const BannerHeader = (props) => (
  <div className={classnames("heavy_text", "section_header", "right_margin")}>
    <p>{props.text}</p>
  </div>
)

const BannerParagraphLeft = (props) => (
  <div className="shadowedBoxContainer">
    <div className="bannerParagraphLeft">
      <p>{props.text}</p>
      <img src="placeholder.png"></img>
    </div>
  </div>
)

const BannerParagraphRight = (props) => (
  <div className="shadowedBoxContainer">
    <div className="bannerParagraphRight">
      <img src="placeholder.png"></img>
      <p>{props.text}</p>
    </div>
  </div>
)

const Splash = (props) => (
  <div>
    <img className={classnames("splash", props.classes)} src={props.source}/>
  </div>
)

$(window).on('scroll', function() {
  var y_scroll_pos = window.pageYOffset;
  var scroll_pos_test = 750;
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
