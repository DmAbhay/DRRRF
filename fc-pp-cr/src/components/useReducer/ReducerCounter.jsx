// Counter.js
import { useContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";
import { UserContext } from "../Context/UserProvider";

export function ReducerCounter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { user } = useContext(UserContext)

    return (
        <div>
            <h1>Count: {state.count}</h1>

            <h1>{user.name}</h1>


            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    );
}
