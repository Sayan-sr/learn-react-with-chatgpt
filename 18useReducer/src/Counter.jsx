import { useReducer } from "react"


function reducer(state, action){

    switch(action.type){        // action.type means: Look at what type of action happened
        case "INCREMENT":
            return state + 1

        case "DECREMENT":
            return state - 1

        case "RESET":
            return 0

        default:
            return state
    }
}

function Counter(){

    const [count, dispatch] = useReducer(reducer, 0)


    return(
        <div>
            <h2>{count}</h2>

            <button onClick={() => dispatch({type: "INCREMENT"})}>
                Increase 
            </button>

            <button onClick={() => dispatch({type: "DECREMENT"})}>
                Decrease 
            </button>

            <button onClick={() => dispatch({type: "RESET"})}>
                Reset 
            </button>
        </div>
    )
}

export default Counter


// function reducer(state, action)
// It basically means: Here are the rules for changing my state.

// Why does reducer receive state and action?
// Because the reducer needs two pieces of information.

// First: current state
// state

// Second: what happened?
// action


// Why did we use switch?
// Because the reducer needs to handle different actions.


// why did we use dispatch? 



// | Concept      | Definition                                         |
// | ------------ | -------------------------------------------------  |
// | **Reducer**  | Function containing rules for how state changes ✅ |
// | **Action**   | Object describing what happened ✅                 |
// | **Dispatch** | Function used to send an action to the reducer ✅  |
// | **State**    | Current value/data being managed ✅                |
