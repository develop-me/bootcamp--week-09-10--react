import React, { Component } from "react";
import {  Link } from "react-router-dom";
import axios from "./axios";

import Loading from "./Loading";
import Tags from "./Tags";

class Articles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            articles: [],
        }
    }

    componentDidMount() {
        // load articles from API
        axios.get("/articles").then(({ data }) => {
            this.setState({
                loaded: true,
                articles: data.data,
            });
        });
    }

    render() {
        let { loaded, articles } = this.state;

        return !loaded ? <Loading /> : (
            <ul className="list-group">
                { articles.map(article => (
                    <li className="list-group-item" key={ article.id }>
                        <Link to={  `/articles/${ article.id }` }>{ article.title }</Link>
                        <Tags tags={ article.tags } />
                    </li>
                )) }
            </ul>
        );
    }
}

export default Articles;
