

function MouseEnterAndClick() {

    function greet() {
        alert("Hello")
    }

    return (
        <div>
            <button 
            onMouseEnter={greet}
            onClick={greet}
            // onMouseLeave={greet}
            >
                Hover or Click 
                {/* Hover Me  */}
            </button>
        </div>
    )
}

export default MouseEnterAndClick


// So the complete sequence is:
// Mouse enters the button
// ↓
// Alert: Hello
// Close the alert
// Click the button
// ↓
// Alert: Hello