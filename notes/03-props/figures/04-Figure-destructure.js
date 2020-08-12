import React from "react";

// destructure the props object when it's passed in
const Figure = ({ caption, src }) => (
  <figure className="card">
    <img
      className="card-img-top"
      alt={ caption }
      src={ src }
    />
    <div className="card-body">
      <figcaption className="card-text">
        { caption }
      </figcaption>
    </div>
  </figure>
);

export default Figure;
