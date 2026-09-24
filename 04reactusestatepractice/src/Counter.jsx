import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <h2>Count: {count}</h2>

            <button
            onClick={() => setCount(count + 1)}
            >
                Increase
            </button>
            <br />
            <button
            onClick={() => setCount(count - 1)}
            >
                Decrease
            </button>
            <br />

            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter