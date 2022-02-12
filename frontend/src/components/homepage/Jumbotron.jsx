import React, { Component } from "react";
import { render } from "react-dom";
import logo from "../../assets/img/homepage/model1.jpg";
import background from "../../assets/img/homepage/jumboback1.jpg";

var sectionStyle = {
  backgroundImage: `url(${background})`,
}

export default class Jumbotron extends Component {  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row w-100 bg-image d-flex" style={sectionStyle}>
          <div className="col d-flex align-items-center justify-content-center mx-5 text-center">
            <h1 className="display-4 text-primary fw-bold">Build a Professional Resume for Free</h1>
          </div>
          <div className="col text-center">
            <img src={logo} className="img-responsive mx-3" alt="professional employee"></img>
          </div>
        </div>
      </div>
    );
  }
}
