import React, { useState, useEffect } from "react";
import axios from "axios";

const StarWarsFolks = () => {
  // setup state
  const [ loaded, setLoaded ] = useState(false);
  const [ people, setPeople ] = useState([]);

  // wrap API request with useEffect
  useEffect(() => {
    axios.get("https://swapi.dev/api/people").then(({ data }) => {
      setLoaded(true);
      setPeople(data.results);
    });
  }, []);

  // render
  return !loaded ? <p>Loading...</p> : (
    <>
      <h2>Some Star Wars Peeps</h2>
      <ul className="list-group">
        { people.map(person => (
          <li
            key={ person.url }
            className="list-group-item"
          >
            { person.name }
          </li>
        )) }
      </ul>
    </>
  );
};

export default StarWarsFolks;
