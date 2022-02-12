import React, { Component } from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { render , ReactDom } from "react-dom";
import Header  from "./base/Header";
import Footer from "./base/Footer";
import HomePage from "./homepage/HomePage";
import Resume from "./resume/Resume";
import About from "./main/About";
import Page404 from "./error/Page404";


export default class App extends Component {  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        {/* < Resume />
        < HomePage /> */}
          <Routes>
              <Route exact path=''  element={ <HomePage/>} />
              <Route exact path="/resume" element={<Resume />} />
              <Route exact path="/about" element={<About />} />
              <Route component={<Page404 />} />  
          </Routes>
        <Footer />
      </div>
    );
  }
}

