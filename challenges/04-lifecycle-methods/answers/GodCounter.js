import { Component } from 'react';

class GodCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 1,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // add event listener on mount
        window.addEventListener("click", this.handleClick);
    }

    componentWillUnmount() {
        // remove event listener on unmount
        // otherwise it'll stick around and cause untold of chaos
        window.removeEventListener("click", this.handleClick);
    }

    handleClick() {
        this.setState({ value: this.state.value + 1 });
    }

    render() {
        const { value } = this.state;

        return (
            <p className="alert alert-primary mt-4">{ value }</p>
        );
    }
}

export default GodCounter;
