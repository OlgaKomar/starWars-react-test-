import React, { Component } from "react";

class ItemStatusFilter extends Component {
  state = {};
  getClassName() {}
  render() {
    return (
      <React.Fragment>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-info">
            All
          </button>
          <button type="button" className="btn btn-outline-secondary">
            Active
          </button>
          <button type="button" className="btn btn-outline-secondary">
            Done
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default ItemStatusFilter;
