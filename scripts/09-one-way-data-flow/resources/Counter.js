import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        let { count } = this.state;

        return (
            <>
                <p onClick={ this.handleClick }>{ count }</p>
            </>
        );
    }
}

export default Counter;
