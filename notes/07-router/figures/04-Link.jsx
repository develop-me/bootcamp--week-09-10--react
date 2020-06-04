import React from "react";

// import Link from ReactRouter
import { Link } from "react-router-dom";

const LinkList = () => (
  <ul className="list-group">
    <li className="list-group-item">
      { /* use Link instead of <a> */ }
      <Link to="/">Home</Link>
    </li>
    <li className="list-group-item">
      { /* use Link instead of <a> */ }
      <Link to="/figures">Figures</Link>
    </li>
  </ul>
);

export default LinkList;
