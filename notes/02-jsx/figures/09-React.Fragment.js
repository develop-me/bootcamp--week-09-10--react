// add an import of Fragment from react
import React, { Fragment } from "react";

import Header from "./Header";
import Content from "./Content";

// wrap with Fragment
// won't appear in the final ouput
const App = () => (
  <Fragment>
    <Header />
    <Content />
  </Fragment>
);

export default App;
