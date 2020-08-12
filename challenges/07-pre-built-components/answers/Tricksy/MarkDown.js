import React, { Component } from "react";

import MDEditor from '@uiw/react-md-editor';
import { Card } from "react-bootstrap";

class MarkDown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({ value: value });
    }

    render() {
        let { value } = this.state;

        return (
            <>
                <MDEditor
                    className="mt-4 mb-4"
                    preview="edit"
                    value={ value }
                    onChange={ this.handleChange }
                />

                <Card>
                    <Card.Body>
                        <MDEditor.Markdown source={ value } />
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default MarkDown;
