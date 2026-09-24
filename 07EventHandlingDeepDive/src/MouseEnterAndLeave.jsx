

function MouseEnterAndLeave() {

    function greet() {
        alert("Hello")
    }

    return (
        <div>
            <button
            onMouseEnter={greet}
            onMouseLeave={greet}
            >
                Hover Me 
            </button>
        </div>
    )
}

export default MouseEnterAndLeave


// sequence 
// Mouse outside
//       ↓
// Move mouse onto button
//       ↓
// onMouseEnter fires
//       ↓
//      Hello

// Close alert
//       ↓
// Move mouse away
//       ↓
// onMouseLeave fires
//       ↓
//      Hello


// The sequence is actually:

// Mouse enters the button → onMouseEnter → Alert
// You click OK to close the alert.
// While moving the mouse away from the button (or because the pointer is no longer considered over the button after the alert closes), the onMouseLeave event occurs.
// Second alert appears.

// So it's the mouse leaving the button that triggers the second alert, not the OK button itself.


// onMouseEnter={greet}
// onMouseLeave={greet}

// Both call the same function.
// React doesn't care which event calls it.

// Think of it like this:
// Mouse enters
//         │
//         ▼
//      greet()

// Mouse leaves
//         │
//         ▼
//      greet()

// Button click
//         │
//         ▼
//      greet()


// N.B. :- Different events can all call the same function.