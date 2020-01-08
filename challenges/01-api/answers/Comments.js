import React, { Component } from "react";
import axios from "./axios";

import Loading from "./Loading";

class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            comments: [],
        }
    }

    componentDidMount() {
        // need to pass ID in with props
        let { id } = this.props;

        // load comments from API
        axios.get(`/articles/${id}/comments`).then(({ data }) => {
            this.setState({
                loaded: true,
                comments: data.data,
            });
        });
    }

    render() {
        let { loaded, comments } = this.state;

        return !loaded ? <Loading /> : (
            <>
                <h3>Comments</h3>
                { comments.length === 0 ? <p>No comments</p> : (
                    <ul className="list-group">
                        { comments.map(comment => (
                            <li className="list-group-item" key={ comment.id }>
                                <h4 className="list-group-item-heading">{ comment.email }</h4>
                                <p className="list-group-item-text">{ comment.comment }</p>
                            </li>
                        )) }
                    </ul>
                )}
            </>
        );
    }
}

export default Comments;
