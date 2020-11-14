import { useState } from "react";

const List = () => {
    // controlled component
    const [value, setValue] = useState("");
    const handleChange = e => setValue(e.currentTarget.value);

    // items
    const [items, setItems] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        setValue("");
        setItems([...items, value]);
    };

    return (
        <>
            <form onSubmit={ handleSubmit } className="form-group mt-4">
                <input className="form-control" onChange={ handleChange } value={ value } />
                <button className="btn btn-primary mt-4">Add</button>
            </form>
            <ul className="list-group mt-4">
                { items.map((item, i) => (
                    <li className="list-group-item" key={ i }>{ item }</li>
                )) }
            </ul>
        </>
    );
}

export default List;
