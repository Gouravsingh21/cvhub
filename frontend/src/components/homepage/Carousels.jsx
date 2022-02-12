import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import {v4 as uuidv4} from "uuid";
import { config } from "react-spring";
import logo from "../../assets/img/homepage/demo.webp";

export default class Carousels extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };

  slides = [
    {
      key: uuidv4(),
      content: <img src={logo} alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src={logo} alt="2" />
    },
    {
      key: uuidv4(),
      content: <img src={logo} alt="3" />
    },
    {
      key: uuidv4(),
      content: <img src={logo} alt="4" />
    },
    {
      key: uuidv4(),
      content: <img src={logo} alt="5" />
    },
    {
      key: uuidv4(),
      content: <img src={logo} alt="6" />
    },
    {
      key: uuidv4(),
      content: <img src={logo} alt="7" />
    },
    {
      key: uuidv4(),
      content: <img src={logo} alt="8" />
    }
  ];

  render() {
    return (
      <div style={{marginTop: "200px",backgroundColor: "cadetblue"}}>
        <div className="row text-center mb-3">
          <h1 className="display-6 text-danger">Chose Your Best Templates</h1>
        </div>
        <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
          <Carousel
            slides={this.slides}
            goToSlide={this.state.goToSlide}
            offsetRadius={this.state.offsetRadius}
            animationConfig={this.state.config}
          />
          <div
            style={{
              margin: "0 auto",
              marginTop: "2rem",
              width: "50%",
              display: "flex",
              justifyContent: "space-around"
            }}
          >
            {/* <div>
              <button
                onClick={() => {
                  this.setState({ goToSlide: this.state.goToSlide - 1 });
                }}
              >
                Left Arrow
              </button>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <button
                onClick={() => {
                  this.setState({ goToSlide: this.state.goToSlide + 1 });
                }}
              >
                Right Arrow
              </button>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
