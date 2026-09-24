import { useContext } from "react";
import UserContext from "./UserContext";


function Profile(){

    const {name, age, isLoggedIn} = useContext(UserContext)

    return(
        <div>
            <h2>Hello, {name}</h2>
            <p>Age: {age}</p>
            <p>Logged In: {isLoggedIn ? "Yes" : "No"}</p>
        </div>
    )
}

export default Profile