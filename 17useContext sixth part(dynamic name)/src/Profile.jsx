import { useContext } from "react";
import UserContext from "./UserContext";


function Profile(){

    const {name, setName, isLoggedIn, login, logout} = useContext(UserContext)


    return(
        <div>
            <input 
            type="text" 
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            {
                isLoggedIn ? `Hello ${name}` : "Please Login"
            }

            {
                isLoggedIn ? (
                    <button onClick={logout}>
                        LogOut 
                    </button>
                ) : (
                    <button onClick={login}>
                        Login 
                    </button>
                )
            }
        </div>
    )
}

export default Profile