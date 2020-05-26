import React from "react";

const Tags = ({ tags }) => (
    <span className="pull-right">
        { tags.map(tag => (
            <span key={ tag } className="label label-primary">{ tag  }</span>
        )) }
    </span>
);

export default Tags;
