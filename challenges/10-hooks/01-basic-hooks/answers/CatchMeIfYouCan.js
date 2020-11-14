import { useState } from "react";

const CatchMeIfYouCan = ({ jump }) => {
    const [ top, setTop ] = useState(0);
    const move = () => setTop(top + jump);

    return (
        <button
            style={ { position: "relative", top: top + "px" } }
            onClick={ move }
            className="btn btn-primary"
        >
            Catch Me If You Can!
        </button>
    );
}

CatchMeIfYouCan.defaultProps = {
    jump: 100,
};

export default CatchMeIfYouCan;
