import { useState } from "react";


function Form() {

    const [name, setName] = useState("")
    const [role, setRole] = useState("")

    function handleSubmit(e) {

        e.preventDefault()

        alert(
            `Hello ${name}\nRole: ${role}`
        )
    }

    return(
        <form onSubmit={handleSubmit}>

            <input 
            type="text" 
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <input 
            type="text" 
            placeholder="Enter your role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            />

            <br /><br />

            <button type="submit">
                Submit 
            </button>
        </form>
    )
}

export default Form


// Q1. Why do we write value={name}? What will happen if we remove this line?
// value={name} means: 
// "The value shown inside this input should always come from the React state."
// This is called a Controlled Component.

// const [name, setName] = useState("");
// Here, name is the React state.

// Now look at the input:
{/* <input
    value={name}
    onChange={(e) => setName(e.target.value)}
/> */}

// Think of it like this:
// User types
//       ↓
// onChange
//       ↓
// setName(...)
//       ↓
// React state updates
//       ↓
// value={name}
//       ↓
// Input displays the updated value


// What if we remove value={name}?
// The input will still let you type.
// But now the browser controls the input instead of React.
// That is called an Uncontrolled Component.



// Q2. Why do we write: onChange={(e) => setName(e.target.value)}
// What is its purpose?
// onChange means React creates an event object...

// e → event object

// target → HTML element

// value → current input value




// Q3. Why do we write: <form onSubmit={handleSubmit}>
// instead of <button onClick={handleSubmit}>
// What is the advantage of using onSubmit?
// We use <form onSubmit> because we are submitting a form and it provides proper browser behaviour, keyboard support, accessibility and validation. 

{/* <form onSubmit={handleSubmit}> */}
// onSubmit is a form event. 
// Using a form gives us many advantages.

// Advantage 1 : Pressing Enter inside an input automatically submits the form. 

// For example, 
// Name: Sayan 
// Instead of clicking Submit, you can simply press: Enter 
// and React calls: handleSubmit() 

// If you only had: <button onClick={handleSubmit}>
// pressing Enter would not trigger your button click in the same way. 

// Advantage 2
// Forms are standard HTML.
// Browsers understand forms. 
// Screen readers understand forms. 
// Accessibility is better. 




// Q4. Why do we write: e.preventDefault();
// preventDefault blocks the browser's default submission behavior. 
// Otherwise the page reloads. 