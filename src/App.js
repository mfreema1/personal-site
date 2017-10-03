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
        <Splash />
        <Banner text="About"/>
        <BannerHeader text="Contact"/>
      </div>
    );
  }
}

class BarTop extends Component {
  render() {
    return (
      <div className="bar_top">
        <BarItem text="Welcome" classes="first_tab"/>
        <BarItem text="About" classes="second_tab"/>
        <BarItem text="Say Hi" classes={classnames("right_margin", "third_tab")}/>
      </div>
    )
  }
}


class BarItem extends Component {
  render() {
    return(
      <div className={classnames("bar_item", "heavy_text", this.props.classes)}>{this.props.text}</div>
    )
  }
}

class Banner extends Component {
  render() {
    return (
      <div id="about_section">
        <BannerHeader text={this.props.text}/>
        {/*
          Replace these id's with classnames
          */}
        <BannerParagraphLeft text={about_placeholder_text} id='first_box'/>
        <BannerParagraphRight text={about_placeholder_text} id='second_box'/>
        <BannerParagraphLeft text={about_placeholder_text} id='third_box'/>
      </div>
    );
  }
}

class BannerHeader extends Component {
  render() {
    return (
      <div className={classnames("heavy_text", "section_header", "right_margin")}>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

class BannerParagraphLeft extends Component {
  render() {
    return (
      <div className="shadowedBoxContainer">
        <div className="bannerParagraphLeft">
          <p>{this.props.text}</p>
          <img src="placeholder.png"></img>
        </div>
      </div>
    );
  }
}

class BannerParagraphRight extends Component {
  render() {
    return (
      <div className="shadowedBoxContainer">
        <div className="bannerParagraphRight">
          <img src="placeholder.png"></img>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

class Splash extends Component {
  render() {
    return (
      <div className="splash" id="splash">
        <img src="primary_splash.jpg"/>
      </div>
    );
  }
}


//jQuery from here on out
$(window).on('scroll', function() {
  var y_scroll_pos = window.pageYOffset;
  var scroll_pos_test = 750;
  //var about_blocks_sliding_right = document.getElementById('test');
  console.log(window.pageYOffset);

  if(y_scroll_pos > scroll_pos_test) {
    console.log("tick")
    //about_blocks_sliding_right.style.visibility = 'hidden';
  }
  else{
    //about_blocks_sliding_right.style.visibility = 'visible';
  }
});

//handle setting all of our click events on the tabs.  This can only be done after the document
//is ready and all of the HTML elements have already been created.
//can refactor this from here on to get rid of ids and replace them all with classnames
$(document).ready(function() {
    console.log(document.getElementsByClassName("bar_item"))
  $('#first_tab').click(function(e) {
    //scroll to the top of the poster

  });
  $('#second_tab').click(function(e) {
    //scroll to the top of the about section
    var about_section = document.getElementById('about_section');
    $('html, body').animate( {
      scrollTop: $("#about_section").offset().top
    }, 1000);
  });
  $('#third_tab').click(function(e) {
    //scroll to the top of the contact section
    console.log('tick3');
  });
});
export default App;
