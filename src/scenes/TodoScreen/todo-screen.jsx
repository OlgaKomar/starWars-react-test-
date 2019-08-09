import React, { Component } from "react";
import ItemStatusFilter from "./item-status-filter";
import TodoList from "./todo-list";
import { Spinner } from "../../components/";

class TodoScreen extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Spinner />
        <ItemStatusFilter />
        <TodoList />
      </React.Fragment>
    );
  }
}

export default TodoScreen;
