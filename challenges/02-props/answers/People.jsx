import React from "react";

const People = ({ names }) => (
    names ? (
        <ul className="list-group">
            { names.map((name, i) => (
                <li className="list-group-item" key={ i }>{ name }</li>
            )) }
        </ul>
    ) : <p>Nothing to see here</p>
);

export default People;
