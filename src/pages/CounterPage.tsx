import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        // Implement reducer cases here
        default:
            return state;
    }
}

const CounterPage = ({ initialCount }: { initialCount: number }) => {
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    });

    const increment = () => {
        dispatch({ type: "INCREMENT" });
    }

    const decrement = () => {
        dispatch({ type: "DECREMENT" });
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value) || 0;

        dispatch({ type: "SET_VALUE_TO_ADD", payload: value });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch({ type: "ADD_VALUE_TO_COUNT" });
    }

    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button className="mr-3" onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot</label>
                <input value={state.valueToAdd || ""} onChange={handleChange} type="number" className="p-1 m-3 bg-gray-50 border border-gray-300" />
                <Button>Add it</Button>
            </form>
        </Panel>
    )
}

export default CounterPage;