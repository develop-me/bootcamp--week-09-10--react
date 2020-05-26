import React, { Component } from "react";
import axios from "./axios";

import Input from "./Input";

class CreateComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            comment: "",
            saved: false,
        }

        this.handleEmail = this.handleEmail.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmail(e) {
        this.setState({ email: e.currentTarget.value });
    }

    handleComment(e) {
        this.setState({ comment: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        let { comment, email } = this.state;
        let { id } = this.props;

        let success = () => {
            this.setState({
                saved: true,
                comment: "",
                email: "",
            });

            // hide saved message after 2 seconds
            setTimeout(() => this.setState({ saved: false }), 2000);
        };

        // post to the API
        axios.post(`/articles/${id}/comments`, {
            saved: false,
            comment: comment,
            email: email,
        }).then(success);
    }

    render() {
        let { saved, email, comment } = this.state;

        return (
            <>
                { saved ? <p className="alert alert-success">Saved!</p> : null}

                <form onSubmit={ this.handleSubmit }>
                    <Input handleChange={ this.handleEmail } value={ email } name="Email" id="email" />
                    <Input handleChange={ this.handleComment } value={ comment } name="Comment" id="comment" />
                    <button className="btn btn-primary">Add Comment</button>
                </form>
            </>
        );
    }
}

export default CreateComment;
