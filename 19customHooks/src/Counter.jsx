import useCounter from "./useCounter";


function Counter(){

    const {count, increase, decrease, reset} = useCounter()

    return(
        <div>
            <h2>Count: {count}</h2>

            <button onClick={increase}>
                Increase 
            </button>

            <br />

            <button onClick={decrease}>
                Decrease 
            </button>

            <br />

            <button onClick={reset}>
                Reset 
            </button>
        </div>
    )
}

export default Counter