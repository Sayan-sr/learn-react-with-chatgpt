import { useState } from "react";

function PasswordToggle(){

    const [showPassword, setShowPassword] = useState(false)

    return(
        <div>
            <input 
            type= {showPassword ? "text" : "password"} 
            placeholder="Enter Password"
            />

            <br />

            <button
            onClick={() => setShowPassword(!showPassword)}
            >
                {
                    showPassword
                    ? "Hide Password"
                    : "Show Password"
                }
            </button>
        </div>
    )
}

export default PasswordToggle





