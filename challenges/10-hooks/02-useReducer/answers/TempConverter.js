import { useReducer } from "react";

// reducer functions
const fahrenheitReducer = (state, { value }) => {
    return {
        ...state,
        fahrenheit: value
        celsius: (value - 32) * (5/9),
    };
};

const celsiusReducer = (state, { value }) => {
    return {
        ...state,
        celsius: value,
        fahrenheit: (value * 9/5) + 32,
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case "FAHRENHEIT": return fahrenheitReducer(state, action);
        case "CELSIUS": return celsiusReducer(state, action);
        default: return state;
    }
};

// initial state
const initialState = {
    fahrenheit: "32",
    celsius: "0"
}

// component
const TempConverter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { fahrenheit, celsius } = state;

    // pass e.currentTarget.value along, as controlled components
    const updateF = (e) => dispatch({ type: "FAHRENHEIT", temp: e.currentTarget.value });
    const updateC = (e) => dispatch({ type: "CELSIUS", temp: e.currentTarget.value });

    // two form inputs, so controlled components
    return (
        <form>
            <div class="form-group">
                <label htmlFor="temp-f">°F</label>
                { /* set onChange and value, as controlled components */ }
                <input
                    id="temp-f"
                    class="form-control"
                    onChange={ updateF }
                    value={ fahrenheit }
                />
            </div>
            <div class="form-group">
                <label htmlFor="temp-c">°C</label>
                { /* set onChange and value, as controlled components */ }
                <input
                    id="temp-c"
                    class="form-control"
                    onChange={ updateC }
                    value={ celsius }
                />
            </div>
        </form>
    )
}

export default TempConverter;
