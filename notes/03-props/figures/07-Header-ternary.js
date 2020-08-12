import React from "react";

const Header = ({ title, subtitle }) => (
  <header className="jumbotron">
    <h1>
      { title }
    </h1>
    { /* return null if you don't want anything rendered */ }
    { !subtitle ? null :
      <p>{ subtitle }</p>
    }
  </header>
);

export default Header;
