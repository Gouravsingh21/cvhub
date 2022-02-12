import React, { Component } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Redirect,
// } from "react-router-dom";

export default class Basic_info extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row text-center m-5">
        <h1 className="display-6">Create Resume with expertise in Your Profession</h1>
        <h3>Best Quality Suggestion Facility with Auto Complete</h3>
        <div className="row">
          <div className="row">
            <div className="col">
              <a href="#" className="btn  btn-outline-primary  border-primary">Doctor</a>
            </div>
            <div className="col">
              <a href="#" className="btn btn-outline-primary  border-primary">Doctor</a>
            </div>
            <div className="col">
              <a href="#" className="btn btn-outline-primary  border-primary">Doctor</a>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <a href="#" className="btn btn-outline-primary  border-primary">Doctor</a>
            </div>
            <div className="col">
              <a href="#" className="btn btn-outline-primary  border-primary">Doctor</a>
            </div>
            <div className="col">
              <a href="#" className="btn btn-outline-primary  border-primary">Doctor</a>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <a href="#" className="btn btn-outline-primary  border-primary">Doctor</a>
            </div>
            <div className="col">
              <a href="#" className="btn btn-outline-primary  border-primary">Doctor</a>
            </div>
            <div className="col">
              <a href="#" className="btn btn-outline-primary  border-primary">Doctor</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
