import { useReducer } from "react"

function reducer(state, action){

    switch(action.type){

        case "SET_NAME":
            return {
                ...state,
                name: action.payload        // payload means: what data do we need
            }

        case "SET_EMAIL":
            return {
                ...state,
                email: action.payload
            }

        case "LOGIN":
            return {
                ...state,
                isLoggedIn: true
            }

        case "LOGOUT":
            return {
                ...state,
                isLoggedIn: false
            }

        default:
            return state
    }
}


function UserForm(){

    const initialState = {
        name: "",
        email: "",
        isLoggedIn: false
    }

    const [state, dispatch] = useReducer(reducer, initialState)


    return(
        <div>
            <input 
            type="text" 
            placeholder="Enter your name"
            onChange={(e) => dispatch({
                type: "SET_NAME",
                payload: e.target.value
            })}
            />

            <br />

            <input 
            type="email" 
            placeholder="Enter your email"
            onChange={(e) => dispatch({
                type: "SET_EMAIL",
                payload: e.target.value
            })}
            />

            {/* <button onClick={() => dispatch({type: "LOGIN"})}>
                Login 
            </button>

            <button onClick={() => dispatch({type: "LOGOUT"})}>
                Logout 
            </button> */}

            {
                state.isLoggedIn ? (
                    <button 
                    onClick={() => dispatch({type: "LOGOUT"})}
                    >
                        Logout 
                    </button>
                ) : (
                    <button 
                    onClick={() => dispatch({type: "LOGIN"})}
                    disabled={state.name.trim() === "" || state.email.trim() === ""}
                    >
                         Login
                    </button>
                )
            }

            <h3>
                {
                    state.isLoggedIn ? "Logged In" : "Logged Out"
                }
            </h3>

            <h2>{state.name}</h2>
            <h2>{state.email}</h2>
        </div>
    )
}

export default UserForm