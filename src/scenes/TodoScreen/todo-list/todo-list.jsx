import React, { Component } from "react";
import TodoListItem from "../todo-list-item";

class TodoList extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <TodoListItem />
        <TodoListItem />
      </React.Fragment>
    );
  }
}

export default TodoList;
