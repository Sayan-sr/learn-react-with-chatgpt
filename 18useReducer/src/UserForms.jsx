import { useState } from "react";


function UserForms(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [isLoggedin, setIsLoggedIn] = useState(false)


    return(
        <div>
            <input 
            type="text" 
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <br />

            <input 
            type="email" 
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <br />

            {
                isLoggedin ? (
                    <button onClick={() => setIsLoggedIn(false)}>
                        Logout 
                    </button>
                ) : (
                    <button 
                    onClick={() => setIsLoggedIn(true)}
                    disabled={name.trim() === "" || email.trim() === ""}
                    >
                        Login 
                    </button>
                )
            }

            {
                isLoggedin ? "Logged In" : "Logged Out"
            }

            <h2>{name}</h2>
            <h2>{email}</h2>
        </div>
    )
}

export default UserForms