import React, { Fragment, Component } from "react";
import Button from "./Button";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: 1 };
  }

  render() {
    return (
      <Fragment>
        { /* if selected is 1, this will be true, otherwise false */ }
        <Button name="First" selected={ this.state.selected === 1 } />

        { /* if selected is 2, this will be true, otherwise false */ }
        <Button name="Second" selected={ this.state.selected === 2 } />
      </Fragment>
    );
  }
}

export default Buttons;
