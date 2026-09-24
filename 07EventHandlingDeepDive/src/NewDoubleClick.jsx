

function NewDoubleClick() {

    function handleClick() {
        alert("Single Click")
    }

    function handleNewDoubleClick() {
        alert("Double Click")
    }

    return (
        <div>
            <button 
            onClick={handleClick}
            onDoubleClick={handleNewDoubleClick}
            >
                Click Me 
            </button>
        </div>
    )
}

export default NewDoubleClick