import { useRef } from "react";


function FocusInput(){

    const inputRef = useRef(null)

    function handleFocus(){
        inputRef.current.focus()        // inputRef.current gets the actual <input> element.
    }


    return(
        <div>
            <input ref={inputRef} />        {/* Connecting the ref to an element */} 

            <button onClick={handleFocus}>
                Focus Input 
            </button>
        </div>
    )
}

export default FocusInput



