import { useContext } from "react";
import UserContext from "./UserContext";


function Profile(){

    const name = useContext(UserContext)

    return(
        <div>
            <h2>Hello, {name}</h2>
        </div>
    )
}

export default Profile