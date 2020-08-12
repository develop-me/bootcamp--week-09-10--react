import React from "react";

const names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const People = () => (
    <ul className="list-group">
        { names.map((name, i) => (
            <li className="list-group-item" key={ i }>{ name }</li>
        )) }
    </ul>
);

export default People;
