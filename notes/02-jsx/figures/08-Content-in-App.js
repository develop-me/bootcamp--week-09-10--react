import React from "react";

import Header from "./Header";
import Content from "./Content";

// wrap in a <div> so there's only one top-level element
const App = () => (
  <div>
    <Header />
    <Content />
  </div>
);

export default App;
