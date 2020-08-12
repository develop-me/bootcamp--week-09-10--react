import React from "react";

// accept children, no more title prop
const Header = ({ children, subtitle }) => (
  <header className="jumbotron">
    <h1>
      { /* use children instead of title */}
      { children }
    </h1>
    { !subtitle ? null :
      <p>{ subtitle }</p>
    }
  </header>
);

export default Header;
