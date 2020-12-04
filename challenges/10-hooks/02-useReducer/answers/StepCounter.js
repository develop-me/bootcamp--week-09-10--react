import { useReducer } from "react";

// reducer functions

// destructure the action to keep things tidy
const increaseReducer = (state, { max, step }) => {
    return {
        ...state,
        count: state.count < max ? state.count + step : state.count,
    };
}

// destructure the action to keep things tidy
const decreaseReducer = (state, { step }) => {
    return {
        ...state,
        count: state.count > 0 ? state.count - step : state.count,
    };
}

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREASE": return increaseReducer(state, action);
        case "DECREASE": return decreaseReducer(state, action);
        default: return state;
    }
};

// initial state
const initialState = { count: 0 };

// component
// accept the step and max props
const StepCounter = ({ step, max }) => {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { count } = state;

    // pass along step and max
    const clickIncrease = () => dispatch({ type: "INCREASE", step: step, max: max });

    // pass along step (max not needed)
    const clickDecrease = () => dispatch({ type: "DECREASE", step: step });

    return (
        <div className="card-body">
            <p>{ count }</p>
            <button onClick={ clickIncrease } className="btn btn-primary">+</button>
            <button onClick={ clickDecrease } className="btn btn-secondary">-</button>
        </div>
    );
}

export default StepCounter;
