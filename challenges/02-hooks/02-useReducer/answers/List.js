import React, { useState, useReducer } from "react";
import reducer from "./reducer";

const initial = {
    items: [],
};

const List = () => {
    // keep track of input value
    const [input, setInput] = useState("");

    // use the reducer
    const [{ items }, dispatch] = useReducer(reducer, initial);

    // update input state
    const handleInput = (e) => {
        setInput(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput("");
        dispatch({ type: "NEW_ITEM", value: input });
    };

    return (
        <div className="card">
            <form className="card-header" onSubmit={ handleSubmit }>
                <input className="form-control" onChange={ handleInput } value={ input } />
            </form>

            <div className="card-body">
                { items.length === 0 ? <p className="card-text">No list items</p> : (
                    <ul className="list-group list-group-flush">
                        { items.map((item, index) => (
                            <li key={ index } className="list-group-item d-flex justify-content-between align-items-center">

                                <span
                                    className="flex-grow-1"
                                    onClick={ () => dispatch({ type: "MARK_COMPLETED", index: index })}
                                    style={ {
                                        cursor: "pointer",
                                        textDecoration: item.completed ? "line-through" : ""
                                    } }
                                >{ item.task }</span>

                                <button class="btn btn-sm btn-primary mr-1">Edit</button>

                                <button
                                    onClick={ () => dispatch({ type: "REMOVE_ITEM", index: index }) }
                                    class="btn btn-sm btn-danger"
                                >&times;</button>
                            </li>
                        )) }
                    </ul>
                )}
            </div>
        </div>
    );
};

export default List;
