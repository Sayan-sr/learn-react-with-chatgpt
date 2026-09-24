import { useRef, useState } from "react";


function RefCounter(){

    const countRef = useRef(0)
    // const [render, setRender] = useState(0)

    function handleCount(){
        countRef.current++
        console.log(countRef.current);

        // setRender(render + 1)
        
    }

    return(
        <div>

            <h2>Check the console</h2>
            <h2>{countRef.current}</h2>

            <button onClick={handleCount}>
                Increase Ref Count
            </button>

            
        </div>
    )
}

export default RefCounter