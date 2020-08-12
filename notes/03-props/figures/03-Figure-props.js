import React from "react";

// props are passed in as an object as the
// first argument to our component
const Figure = props => (
  <figure className="card">
    { /* use the props we passed in: props.caption and props.src */}
    { /* attributes using JS values don't have quotation marks */ }
    <img
      className="card-img-top"
      alt={ props.caption }
      src={ props.src }
    />
    <div className="card-body">
      <figcaption className="card-text">
        { props.caption }
      </figcaption>
    </div>
  </figure>
);

export default Figure;
