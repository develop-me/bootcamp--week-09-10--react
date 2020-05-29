import React, { Component } from "react";
import axios from "./axios";

import Input from "./Input";

class CreateArticle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // controlled components
            title: "",
            article: "",
            tags: "",

            // should it show a saved message?
            saved: false,
        }

        this.handleTitle = this.handleTitle.bind(this);
        this.handleArticle = this.handleArticle.bind(this);
        this.handleTags = this.handleTags.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitle(e) {
        this.setState({ title: e.currentTarget.value });
    }

    handleArticle(e) {
        this.setState({ article: e.currentTarget.value });
    }

    handleTags(e) {
        this.setState({ tags: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        let { title, article, tags } = this.state;

        let success = () => {
            // clear the form fields
            this.setState({
                saved: true,
                title: "",
                article: "",
                tags: "",
            });

            // hide the saved message after 2 seconds
            setTimeout(() => this.setState({ saved: false }), 2000);
        };

        // post to the API
        axios.post("/articles", {
            saved: false,
            title: title,
            article: article,
            tags: tags.split(", "),
        }).then(success);
    }

    render() {
        let { saved, title, article, tags } = this.state;

        return (
            <>
                { saved ? <p className="alert alert-success">Saved!</p> : null}

                <form onSubmit={ this.handleSubmit }>
                    <Input handleChange={ this.handleTitle } value={ title } name="Title" id="title" />
                    <Input handleChange={ this.handleArticle } value={ article } name="Article" id="article" />
                    <Input handleChange={ this.handleTags } value={ tags } name="Tags" id="tags" />
                    <button className="btn btn-primary">Create</button>
                </form>
            </>
        );
    }
}

export default CreateArticle;
