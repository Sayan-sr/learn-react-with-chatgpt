import { useState } from "react";

function Condition({name}){

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return(
        <div>
            {
                isLoggedIn
                ? <h2>Welcome {name}</h2>
                : <h2>Please login</h2>
            }

            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle</button>

        </div>
    )
}

export default Condition