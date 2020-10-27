import { Component } from "react";

class Clicked extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: true });
    }

    render() {
        return (
            <p className="alert alert-primary mt-4" onClick={ this.handleClick }>{ this.state.clicked ? "Clicked" : "Not clicked" }</p>
        );
    }
}

export default Clicked;
