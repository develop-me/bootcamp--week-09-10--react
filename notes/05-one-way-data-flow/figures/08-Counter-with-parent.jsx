import React, { Fragment, Component } from "react";

class Counter extends Component {
  // ...etc.

  // make sure you bind in constructor
  handleButtonClick() {
    // destructure props to get the handleSubmit function
    // this must be passed in from the parent
    let { handleSubmit } = this.props;

    // now, call the passed in handleSubmit function
    // and pass it the current value of count
    handleSubmit(this.state.count);
  }

  render() {
    let { count } = this.state;

    return (
      <Fragment>
        <p onClick={ this.handleClick }>{ count }</p>
        { /* call the local handleButtonClick method */ }
        <button onClick={ this.handleButtonClick }>Submit</button>
      </Fragment>
    );
  }
}

export default Counter;
