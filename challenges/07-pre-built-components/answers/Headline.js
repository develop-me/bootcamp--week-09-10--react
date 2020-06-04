import React, { Component } from "react";

import { DisplayText } from "react-bootstrap";
import { BlockPicker } from "react-color";

class Headline extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colour: "#f33",
            clicked: false,
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleShow() {
        this.setState({ clicked: !this.state.clicked });
    }

    handleChange(colour) {
        this.setState({ colour: colour.hex });
    }

    render() {
        let { message } = this.props;
        let { colour, clicked } = this.state;

        return (
            <>
                <p
                    className="display-1"
                    style={ { color: colour, cursor: "pointer" } }
                    onClick={ this.handleShow }
                >
                    { message }
                </p>

                { !clicked ? null :
                    <BlockPicker
                        color={ colour }
                        onChangeComplete={ this.handleChange }
                    />
                }
            </>
        );
    }
}

export default Headline;
