import { useContext } from "react";
import UserContext from "./UserContext";


function Profile(){

    const user = useContext(UserContext)


    return(
        <div>
            <h2>Hello, {user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Logged In: {user.isLoggedIn ? "Yes" : "No"}</p>
        </div>
    )
}

export default Profile