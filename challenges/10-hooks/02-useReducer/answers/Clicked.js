import { useReducer } from "react";

// reducer functions
const clickedReducer = (state) => {
    return{
        ...state,
        clicked: true,
    };
};

const reducer = (state, action) => {
    switch(action.type) {
        case "CLICKED": return clickedReducer(state);
        default: return state;
    }
}

// initial state
const initialState = { clicked: false};

// component
const Clicked = () =>{
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { clicked } = state;

    return(
        <>
            <p onClick={ () => dispatch({ type: "CLICKED" }) }>
                { clicked ? "Clicked" : "Not Clicked" }
            </p>
        </>
    )
}

export default Clicked;
