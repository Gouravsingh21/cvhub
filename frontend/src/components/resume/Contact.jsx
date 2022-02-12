import React, { Component } from "react";
import { render } from "react-dom";
import Form from 'react-bootstrap/Form'

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <h1 className="m-3 text-center text-danger display-6">Contact Information</h1>
            <div className="col-md-6 text-right  mx-auto m-5">
              <h2 className="text-success ">Enter your Address</h2>
              <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
              <button type="button" className="btn float-right mt-3 btn-info btn-lg">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

