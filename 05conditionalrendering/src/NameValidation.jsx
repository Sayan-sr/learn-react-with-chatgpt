import { useState } from "react";

function NameValidation(){

    const [name, setName] = useState("")

    return(
        <div>
            <input type="text" 
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            {
                name
                ? <h2>Hello, {name}</h2>
                : <h2>Please enter your name</h2>
            }
        </div>
    )
}

export default NameValidation