import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [{ id: 1, value: 0 }, { id: 2, value: 3 }, { id: 3, value: 0 }]
  };

  deleteCounter = counterId => {
    this.setState({
      counters: this.state.counters.filter(counter => counter.id !== counterId)
    });
    console.log("delete");
  };

  resetCounters = () => {
    const counters = this.state.counters.map(counter => {
      return { ...counter, value: 0 };
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button className="btn btn-sm" onClick={this.resetCounters}>
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.deleteCounter}
            data={counter}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
