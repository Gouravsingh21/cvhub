import React, { Component } from "react";
import { render } from "react-dom";
import Form from 'react-bootstrap/Form';
import Name from "./Name";
import Contact from "./Contact";


export default class Resume extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Name />
        <Contact />
      </div>
    );
  }
}

