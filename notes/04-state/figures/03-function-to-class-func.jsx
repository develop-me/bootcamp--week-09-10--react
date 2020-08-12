import React from "react";

const Header = ({ children, subtitle }) => (
  <header className="jumbotron">
    <h1>{ children }</h1>
    <p>{ subtitle }</p>
  </header>
);

export default Header;
