import React, { Component } from "react";
import axios from "axios";

class StarWarsFolks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      people: [],
    };
  }

  // runs when the component first renders
  componentDidMount() {
    // make the GET request
    axios.get("https://swapi.co/api/people").then(({ data }) => {
      // once the data has come back update the component state
      this.setState({
        loaded: true,
        people: data.results,
      });
    });
  }

  render() {
    let { people, loaded } = this.state;

    return !loaded ? <p>Loading...</p> : (
      <>
        <h2>Some Star Wars Peeps</h2>
        <ul className="list-group">
          { people.map(person => (
            <li className="list-group-item">{ person.name }</li>
          )) }
        </ul>
      </>
    );
  }
}

export default StarWarsFolks;
