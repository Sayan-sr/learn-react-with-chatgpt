import { useEffect } from "react";


function Timer(){

    useEffect(() => {

        const interval = setInterval(() => {
            console.log("Timer running...");
            
        }, 1000)

        return() => {
            clearInterval(interval)
        }
    }, [])

    return(
        <div>
            <h2>Timer Component</h2>
        </div>
    )
}

export default Timer