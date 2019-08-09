import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.data.value,
    tags: ["tag1", "tag2", "tag3"]
  };

  increment = product => {
    console.log(product);
    this.setState({ count: ++this.state.count });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.increment(1)}
          className="btn btn-secondary btn-small"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.data.id)}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count ? "primary" : "warning";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
