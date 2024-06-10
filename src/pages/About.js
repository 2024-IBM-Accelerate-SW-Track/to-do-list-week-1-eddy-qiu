import React, { Component } from 'react';
import "./About.css";
import pfp from "../assets/pfp.jpeg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div className="split left">
        <div className="centered">
        <img 
        src={pfp}
        ></img>
        </div>
        </div>
        <div className="split right">
        <div className="centered">
        <div className="name_title">Eddy Qiu</div>
        <div className="brief_description">
          I am a computer science major at the University of Maryland, College Park. I am passionate about innovation and creation and am excited for the Accelerate program this summer!
        </div>
        </div>
        </div>
        </div>
      </div>
    )
  }
}