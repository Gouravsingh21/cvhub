import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import Carousels from "./Carousels";
import Basic_info from "./Basic_info";
import Specility from "./Specility";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Redirect,
// } from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <Basic_info />
        <Carousels />
        <Specility />
      </div>
    );
  }
}
