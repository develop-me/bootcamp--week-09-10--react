import React, { Component } from "react";

// import the Counter component
import Counter from "./Counter";

class Parent extends Component {
  // because we've passed it in as the handleSubmit prop
  // this is the function that gets called inside Counter
  // so if we accept the first argument
  // we have access to the value of the counter
  handleCounterSubmit(value) {
    console.log(value);
  }

  render() {
    // pass in a the handleCounterSubmit method as
    // the handleSubmit prop
    return <Counter handleSubmit={ this.handleCounterSubmit } />;
  }
}

export default Parent;
