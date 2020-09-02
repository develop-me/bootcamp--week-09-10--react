import React, { Component } from "react";
import axios from "./axios";

import Loading from "./Loading";
import FourOhFour from "./FourOhFour";
import Input from "./Input";

class EditArticle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            notFound: false,
            title: "",
            content: "",
            tags: "",
            saved: false,
        }

        this.handleTitle = this.handleTitle.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.handleTags = this.handleTags.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // load article when the component first renders
    componentDidMount() {
        let { id } = this.props;

        let success = ({ data }) => this.setState({
            loaded: true,
            title: data.data.title,
            content: data.data.content,
            tags: data.data.tags.join(", "),
        });

        let fail = () => this.setState({
            loaded: true,
            notFound: true,
        });

        axios.get(`/articles/${id}`).then(success, fail);
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

    // submit article to API when form is submitted
    handleSubmit(e) {
        e.preventDefault();

        let { title, content, tags } = this.state;

        // need to get the ID from props
        let { id } = this.props;

        let success = () => {
            this.setState({ saved: true });
            setTimeout(() => this.setState({ saved: false }), 2000);
        };

        // send to API
        axios.put(`/articles/${id}`, {
            saved: false,
            title: title,
            content: content,
            tags: tags.split(", "),
        }).then(success);
    }

    render() {
        let { saved, title, content, tags, loaded, notFound } = this.state;

        // need to handle loading/404 components
        return !loaded? <Loading /> : (notFound ? <FourOhFour /> : (
            <>
                { saved ? <p className="alert alert-success">Saved!</p> : null}

                <form onSubmit={ this.handleSubmit }>
                    <Input handleChange={ this.handleTitle } value={ title } name="Title" id="title" />
                    <Input handleChange={ this.handleContent } value={ content } name="Content" id="content" />
                    <Input handleChange={ this.handleTags } value={ tags } name="Tags" id="tags" />
                    <button className="btn btn-primary">Update</button>
                </form>
            </>
        ));
    }
}

export default EditArticle;
