

function DoubleClick() {

    function handleDoubleClick() {
        alert("You double-clicked the button")
    }

    return(
        <div>
            <button onDoubleClick={handleDoubleClick}>
                Double Click Me 
            </button>
        </div>
    )
}

export default DoubleClick