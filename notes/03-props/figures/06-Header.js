import React from "react";

const Header = ({ title, subtitle }) => (
  <header className="jumbotron">
    <h1>{ title }</h1>
    <p>{ subtitle }</p>
  </header>
);

export default Header;
