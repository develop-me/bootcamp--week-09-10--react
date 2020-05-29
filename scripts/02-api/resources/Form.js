import React, { Component } from "react";
import axios from "./axios";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: "",
            tags: "",
        };

        this.handleTitle = this.handleTitle.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.handleTags = this.handleTags.bind(this);
    }

    handleTitle(e) {
        this.setState({ title: e.currentTarget.value });
    }

    handleContent(e) {
        this.setState({ content: e.currentTarget.value });
    }

    handleTags(e) {
        this.setState({ tags: e.currentTarget.value });
    }

    render() {
        let { title, content, tags } = this.state;

        return (
            <form className="form">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input id="title" className="form-control" onChange={ this.handleTitle } value={ title } />
                </div>

                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <input id="content" className="form-control" onChange={ this.handleContent } value={ content } />
                </div>

                <div className="form-group">
                    <label htmlFor="tags">Tags</label>
                    <input id="tags" className="form-control" onChange={ this.handleTags } value={ tags } />
                </div>
            </form>
        );
    }
}

export default Form;
