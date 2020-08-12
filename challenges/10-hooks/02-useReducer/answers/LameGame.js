import React, { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "go": return {
            ...state,
            playing: true,
            start: +new Date(),
            finish: null,
        };

        case "stop": return {
            ...state,
            playing: false,
            finish: +new Date(),
        };

        default: return state;
    }
};

const LameGame = ({ aim }) => {
    const initialState = {
        playing: false,
        start: null,
        finish: null,
    };

    const [ state, dispatch ] = useReducer(reducer, initialState)
    const { playing, start, finish } = state;

    const diff = ((finish - start) / 1000) - aim;

    return (
        <>
            <div className="card mb-4">
                <h5 className="card-header">Aim</h5>
                <p className="card-body card-text">{ aim } seconds</p>
            </div>

            { playing ? (
                <button
                    className="btn btn-primary mb-4"
                    onClick={ () => dispatch({ type: "stop" }) }
                >
                    Finish
                </button>
            ) : (
                <button
                    className="btn btn-primary mb-4"
                    onClick={ () => dispatch({ type: "go" }) }
                >
                    Start
                </button>
            )}

            { !(start && finish) ? null :
                <p className="alert alert-info">
                    { diff > 0 ? "Over" : "Under" } by { Math.abs(diff).toFixed(2) } seconds
                </p>
            }
        </>
    );
}

export default LameGame;
