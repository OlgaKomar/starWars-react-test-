import React, { Component } from "react";

class TodoListItem extends Component {
  state = {};
  render() {
    return (
      <li className="list-group-item">
        <span>Cras justo odio</span>
        <button className="btn btn-outline-danger">
          <i className="fa fa-trash-o" />
        </button>
        <button className="btn btn-outline-success">
          <i className="fa fa-exclamation" />
        </button>
      </li>
    );
  }
}

export default TodoListItem;
