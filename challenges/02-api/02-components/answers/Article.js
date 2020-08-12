import React, { Component } from "react";
import axios from "./axios";

import Loading from "./Loading";
import FourOhFour from "./FourOhFour";
import Tags from "./Tags";
import Comments from "./Comments";
import CreateComment from "./CreateComment";

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            notFound: false,
            article: {},
        }
    }

    componentDidMount() {
        let { id } = this.props;

        // function to run if successful
        let success = ({ data }) => this.setState({
            loaded: true,
            article: data.data,
        });

        // function to run if not found
        let fail = () => this.setState({
            loaded: true,
            notFound: true,
        });

        // make request to API
        axios.get(`/articles/${id}`).then(success, fail);
    }

    render() {
        let { loaded, article, notFound } = this.state;
        let { id } = this.props;

        return !loaded ? <Loading /> : (notFound ? <FourOhFour /> : (
            <>
                <h2>{ article.title }</h2>
                <p>{ article.article }</p>
                <Tags tags={ article.tags } />
                <Comments id={ id } />
                <CreateComment id={ id } />
            </>
        ));
    }
}

export default Article;
