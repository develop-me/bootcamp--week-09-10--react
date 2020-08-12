// we have to import Component from react
import React, { Component } from "react";

// use standard JS class syntax
// we "extend" React's Component class
class App extends Component {
  // put the event handler in a method
  // this keeps it separate from our JSX
  handleClick() {
    console.log("Clicked");
  }

  // our class needs a render method - this should return the JSX
  render() {
    // because we're in a class we can refer
    // to the method using "this"
    return (
      <header className="jumbotron" onClick={ this.handleClick }>
        <h1>Hello</h1>
      </header>
    );
  }
}

export default App;
