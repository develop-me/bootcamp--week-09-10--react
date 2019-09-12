import React, { Component } from "react";
import axios from "./axios";

class StarWarsFolks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            people: [],
        };
    }

    render() {
        let { people, loaded } = this.state;

        return !loaded ? <p>Loading...</p> : (
      <>
        <h2>Some Star Wars Peeps</h2>
        <ul className="list-group">
            { people.map(person => (
                <li key={ person.url } className="list-group-item">{ person.name }</li>
            )) }
        </ul>
      </>
        );
    }
}

export default StarWarsFolks;
