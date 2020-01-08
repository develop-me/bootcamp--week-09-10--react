import React, { Component } from "react";
import Square from "./Square";

class Squares extends Component {
    constructor(props) {
        super(props);
        this.state = { selected: 1 };
    }

    render() {
        return (
            <React.Fragment>
                <Square
                    selected={ this.state.selected === 1 }
                    handleClick={ () => this.setState({ selected: 1 }) }
                    colour={ this.props.colour }
                />
                <Square
                    selected={ this.state.selected === 2 }
                    handleClick={ () => this.setState({ selected: 2 }) }
                    colour={ this.props.colour }
                />
            </React.Fragment>
        );
    }
}

export default Squares;
