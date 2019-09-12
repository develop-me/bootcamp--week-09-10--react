import React from "react";

const Loading = () => (
    <div
        className="progress-bar progress-bar-striped active"
        role="progressbar"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
        style={ { width: "100%" } }
    >Loading</div>
);

export default Loading;
