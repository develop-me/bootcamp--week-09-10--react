import { useState } from "react";

const ToggleText = ({ initial, alternate }) => {
    const [ isInitial, setInitial ] = useState(true);
    const change = () => setInitial(!isInitial);

    return (
        <p className="alert alert-success" onClick={ change }>
            { isInitial ? initial : alternate }
        </p>
    );
};

ToggleText.defaultProps = {
    initial: "Hello",
    alternate: "World",
};

export default ToggleText;
