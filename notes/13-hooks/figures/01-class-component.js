import { Component } from "react";

class Counter extends Component {
  constructor(super) {
    super(props);

    // setup initial state
    this.state = {
      counter: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // click handler method
  handleClick() {
    // destructure state to get value of counter
    let { counter } = this.state;
    // use setState to update counter
    this.setState({ counter: counter + 1 });
  }

  render() {
    // destructure state to get value of counter
    let { counter } = this.state;
    // display counter and setup click handler
    return <p onClick={ this.handleClick }>{ counter }</p>;
  }
}

export default Counter;
