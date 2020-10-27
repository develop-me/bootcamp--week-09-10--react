import { Component } from "react";

// import the currently self-aware Button component
import Button from "./Button";

class Buttons extends Component {
  constructor(props) {
    super(props);

    // keep track of which button is selected
    // we'll just use a number for now
    this.state = { selected: 1 };
  }

  render() {
    return (
      <>
        <Button name="First" />
        <Button name="Second" />
      </>
    );
  }
}

export default Buttons;
