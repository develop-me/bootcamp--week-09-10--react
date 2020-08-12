import React from "react";

// just an array of numbers
let numbers = [1, 2, 3, 4];

const Pagination = () => (
    <ul className="pagination">
        { /* use map to output an <li> for each */ }
        { /* item in the array */ }
        { numbers.map((value, index) => (
            <li className="page-item" key={ index }>
                <a className="page-link" href={ "/page/" + value }>{ value }</a>
            </li>
        ))}
    </ul>
);

export default Pagination;
