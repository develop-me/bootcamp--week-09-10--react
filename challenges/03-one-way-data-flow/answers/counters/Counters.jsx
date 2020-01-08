import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: props.count.slice(),
        };
    }

    handleChange(index, amount) {
        let { max } = this.props;
        let values = this.state.values.slice();
        let newValue = values[index] + amount;

        if (newValue >= 0 && newValue <= max) {
            values[index] += amount;
            this.setState({ values });
        }
    }

    render() {
        const { values } = this.state;
        const max = values.reduce((max, value) => value > max ? value : max, 0);

        return (
            <React.Fragment>
                { values.map((value, index) => (
                    <Counter
                        key={ index }
                        highlighted={ value === max }
                        value={ values[index] }
                        handlePlus={ () => this.handleChange(index, 1) }
                        handleSubtract={ () => this.handleChange(index, -1) }
                    />
                )) }
            </React.Fragment>
        );
    }
}

export default Counters;
