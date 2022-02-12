import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router  } from "react-router-dom";
import App from "./components/App";



export default class Index extends Component {  
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <Router >
          <App />
        </Router>
      );
    }
  }
  
const appDiv = document.getElementById("app");
render(<Index />, appDiv);
