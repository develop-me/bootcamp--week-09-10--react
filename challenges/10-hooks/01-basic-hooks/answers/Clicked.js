import { useState } from "react";

const Clicked = () => {
    const [ clicked, setClicked ] = useState(false);
    const update = () => setClicked(true);

    return (
        <p
            className="alert alert-primary mt-4"
            onClick={ update }
        >
            { clicked ? "Clicked" : "Not clicked" }
        </p>
    );
}

export default Clicked;
