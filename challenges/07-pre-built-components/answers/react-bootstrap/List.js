import React, { Component } from "react";

import { Form, Button, ListGroup } from "react-bootstrap";

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
            items: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        let value = e.currentTarget.value;
        this.setState({ value: value });
    }

    handleClick(e) {
        this.setState({
            value: "",
            items: [...this.state.items, this.state.value],
        });
    }

    render() {
        return (
            <>
                <Form
                    className="mt-4"
                >
                    <Form.Control
                        onChange={ this.handleChange }
                        value={ this.state.value }
                    />
                    <Button
                        className="mt-4"
                        onClick={ this.handleClick }
                    >
                        Add
                    </Button>
                </Form>

                <ListGroup className="mt-4">
                    { this.state.items.map((item, i) => (
                        <ListGroup.Item key={ i }>
                            { item }
                        </ListGroup.Item>
                    )) }
                </ListGroup>
            </>
        );
    }
}

export default List;
