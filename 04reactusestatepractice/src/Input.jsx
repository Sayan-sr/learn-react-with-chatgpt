import { useState } from "react";

function Input() {

    let [name, setName] = useState("")
    let [role, setRole] = useState("")

    return (
        <div>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <h2>Hello, {name}</h2>

            <input 
            type="text"
            placeholder="Enter your role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            />

            <p>I am a {role}</p>
        </div>
    )
}

export default Input