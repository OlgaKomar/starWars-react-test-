import React, { Component } from "react";

const listWithData = (ListItem, getData) => {
  return class extends Component {
    state = {
      data: []
    };

    loadData() {
      getData().then(res => this.setState({ data: res }));
    }

    componentDidMount() {
      this.loadData();
    }

    render() {
      return <ListItem {...this.props} data={this.state.data} />;
    }
  };
};

export default listWithData;
