import React, { Component } from "react";
import "./spinner.css";

class Spinner extends Component {
  state = {};
  render() {
    return (
      <div className="lds-css">
        <div className="lds-double-ring">
          <div />
          <div />
        </div>
      </div>
    );
  }
}

export default Spinner;
