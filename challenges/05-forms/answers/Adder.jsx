import React, { Component } from "react";

class Adder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            values: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClickAdd = this.handleClickAdd.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.currentTarget.value });
    }

    handleClickAdd(e) {
        e.preventDefault();
        this.setState({ values: [...this.state.values, +this.state.value] });
    }

    total() {
        return this.state.values.reduce((a, b) => a + b, 0);
    }

    render() {
        return (
            <React.Fragment>
                <form className="form-group mt-4">
                    <input type="number" className="form-control" onChange={ this.handleChange } value={ this.state.value } />
                    <button onClick={ this.handleClickAdd } className="btn btn-primary mt-4">Add</button>
                </form>
                <ul className="list-group">
                    { this.state.values.map((item, i) => (
                        <li className="list-group-item" key={ i }>{ item }</li>
                    )) }
                </ul>
                <p>Total: { this.total() }</p>
            </React.Fragment>
        );
    }
}

export default Adder;
