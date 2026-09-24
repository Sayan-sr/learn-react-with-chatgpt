function FormDemo() {

    function handleSubmit(e){

        e.preventDefault()

        alert("Form Submitted")
    }

    return(
        <form onSubmit={handleSubmit}>

            <input 
            type="text" 
            placeholder="Enter your name"
            />

            <button type="submit">
                Submit 
            </button>
        </form>
    )
}

export default FormDemo


// Internally, this happened:
// Click Submit
//         ↓
// handleSubmit() runs
//         ↓
// Alert appears
//         ↓
// You click OK
//         ↓
// Browser performs its default action
//         ↓
// Form is submitted
//         ↓
// Page reloads
//         ↓
// Everything starts from the beginning
//         ↓
// Input becomes empty


// There is nothing telling the browser: "Don't submit the form."

// So after your function finishes, 
// the browser says: "Okay, now I'll do my normal job."
// and reloads the page.



// and then after adding event object 
// the sequence become like this 
// Click Submit
//        ↓
// handleSubmit(e)
//        ↓
// preventDefault()
//        ↓
// Browser submission cancelled
//        ↓
// Alert appears
//        ↓
// No page reload
//        ↓
// Everything stays on the screen



// What happened before preventDefault()?
// Type "Sayan"
//        ↓
// Click Submit
//        ↓
// Alert
//        ↓
// Browser reloads the page
//        ↓
// Everything disappears



// What happens after preventDefault()?
// Type "Sayan"
//        ↓
// Click Submit
//        ↓
// React receives the event object (e)
//        ↓
// e.preventDefault()
//        ↓
// Browser is NOT allowed to reload the page
//        ↓
// Alert
//        ↓
// Input still contains "Sayan"


// preventDefault() doesn't submit the form.
// It simply tells the browser: "Don't perform your default action."
// The default action for a form is to submit and reload the page.


// Why does React use Forms then?
// "If we prevent the form from submitting, why use <form> at all?"

// Because <form> gives us many advantages:
// Pressing Enter automatically submits the form.
// Better accessibility for screen readers.
// Proper HTML semantics.
// Easier validation.
// Standard browser behavior that React can control.


// So React doesn't avoid forms.
// Instead, React says: "Use the form, but let me control what happens after submission."
