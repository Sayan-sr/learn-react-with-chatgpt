function EventObject() {

    function handleChange(e){
        console.log(e.target.value);
        
    }

    return(
        <div>
            <input 
            type="text" 
            placeholder="Type something..."
            onChange={handleChange}
            />
        </div>
    )
}

export default EventObject


// What is e?
// e stands for event.
// When something happens to an HTML element, React automatically creates an event object and passes it to your function.
// It basically means: "React, whenever the input changes, give me the event object."



// So every time an event occurs:
// Keyboard Input
//         ↓
// onChange event
//         ↓
// React creates an Event Object
//         ↓
// Your function receives it



// What is target?
// The HTML element that triggered the event.
// So target is simply: The element where the event happened.


// In our example:
{/* <input
    type="text"
    onChange={handleChange}
/> */}

// Who triggered the event? 
// The <input>.

// so: 
// e.target
// means:
// "Give me the input element."


// Imagine you have:
{/* <button>Save</button> */}

// If you click it,
// then: e.target
// would be: <button>Save</button>

// If you type inside: <input>
// then: e.target
// is that input element.


// remember it: 
// e
// ↓
// Event Object

// target
// ↓
// The input element

// value
// ↓
// The text inside the input



// Suppose you have this HTML:
{/* <input type="text"> */}

// Ask yourself: Where is the text "Sayan" stored?

// Is it stored in React? ❌ No.

// Is it stored in JavaScript? ❌ No.

// It is stored inside the input element itself. 

// Think of the input as a box.
{/* <input>

────────────── 
|   Sayan    |
────────────── */}

// The input element has a property called: value 

// which stores whatever the user typed.

// So if the user types: Sayan 
// then internally the browser has something like:
// input.value = "Sayan"


// Earlier we wrote:
// onChange={(e) => setName(e.target.value)}

// Let's read it line by line:
// onChange={(e) => ...
// ⬇️
// "When the input changes, React gives me the event object."

// e.target
// ⬇️
// "From that event, give me the input element."

// e.target.value
// ⬇️
// "From that input element, give me whatever the user typed."

// setName(e.target.value)
// ⬇️ 
// "Store that text inside the name state."