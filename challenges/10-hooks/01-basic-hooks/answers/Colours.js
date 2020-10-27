import { useState } from "react";

const Colours = ({ colours }) => {
    const [ index, setIndex ] = useState(0);
    const nextIndex = () => setIndex((index + 1) % colours.length);

    return (
        <div onClick={ nextIndex } style={ {
            width: "200px",
            height: "200px",
            background: colours[index],
        } } />
    );
};

export default Colours;
