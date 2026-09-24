import { useContext } from "react";
import UserContext from "./UserContext";


function Profile(){

    const {isLoggedIn, name, login, logout} = useContext(UserContext)


    return(
        <div>
            <h2>
                {isLoggedIn ? `Hello ${name}` : "Please Login"}
            </h2>

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