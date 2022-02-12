import React, { Component } from "react";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Redirect,
// } from "react-router-dom";

export default class Specility extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row my-5 text-center">
          <h1 className="display-6">Our Specility</h1>
          <div className="col">
             <h2>Best Quality Templates</h2> 
          </div>
          <div className="col">
            <h2>Latest Design</h2>
          </div>
          <div className="col">
            <h2>Attractive Customization</h2>
          </div>
        </div>
      </div>
    );
  }
}
