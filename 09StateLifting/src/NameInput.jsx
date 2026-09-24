

function NameInput({name, setName}){

    return(
        <div>
            <input 
            type="text" 
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
    )
}

export default NameInput


// Final Structure 
// App
// │
// ├── const [name, setName] = useState("")
// │
// ├── <NameInput
// │       name={name}
// │       setName={setName}
// │   />
// │
// └── <Greeting
//         name={name}
//     />


// Compare this with the Counter example. 
// Counter Example 
// App
// │
// ├── count
// ├── setCount
// │
// ├── Counter
// │      count
// │      setCount
// │
// └── Result
//        count


// Name Example 
// App
// │
// ├── name
// ├── setName
// │
// ├── NameInput
// │      name
// │      setName
// │
// └── Greeting
//        name



// The Data Flow 
// User types
//       │
//       ▼
// NameInput

// onChange
//       │
//       ▼
// setName(...)
//       │
//       ▼
// App updates state
//       │
//       ▼
// React re-renders
//       │
//       ├───────────────┐
//       ▼               ▼
// NameInput        Greeting

// Both receive the updated name


// NameInput needs both:
// name
// setName

// because: 
// name → to display the current value in the input. 
// setName → to update the state whenever user types. 



// some important questions 
// Q1. Why are we receiving count as a prop instead of creating it with useState inside Counter?

// Let's imagine we did this. 
// function Counter() {
//     const [count, setCount] = useState(0);

//     ...
// }

// Now the state belongs to: 
// App
// │
// ├── Counter
// │      └── count = 0
// │
// └── Result


// Now ask yourself: Can Result access Counter's state? 
// Answer? No. 

// Because every component has its own private state. 

// Think of it like this. 
// Counter
// │
// └── count

// The count is locked inside Counter. 
// Result cannot go inside another component and read its variables. 

// So this will never work: 
// function Result() {
//     return <h2>{count}</h2>;
// }
 
// because: count is not defined 

// So what do we do? 
// We move the state upward. 
// Instead of: 
// Counter
// │
// └── count

// we do: 
// App
// │
// └── count

// Now both children can receive it. 

// Visual 
// ❌ Before 
// App
// │
// ├── Counter
// │      └── count
// │
// └── Result
// Only Counter knows the count. 

// ✅ After 
// App
// │
// ├── count
// │
// ├── Counter
// └── Result

// Now everyone can use it. 



// Q2. Why are we also receiving setCount? 
// Let's ask ourselves:
// Who changes the count?

// The button is inside:
// Counter

// The button says:
// Increase

// When we click it,

// who should update the state?
// The answer is:
// setCount(...)

// But where is setCount?
// Inside:
// App

// because that's where we created the state.

// So Counter says:
// "I don't own the state anymore."
// "App, can you please give me the function that changes the state?"

// App replies:
// <Counter
//     count={count}
//     setCount={setCount}
// />

// Now Counter can call:
// setCount(count + 1)

// Even though the state lives inside App.



// Q3. Why does Result only receive count? 
// Does Result have any button?
// No.

// Does it increase the count?
// No.

// Does it decrease the count?
// No.

// Does it reset the count?
// No.

// It only displays:
// Current Count: 5

// So it only needs:
// count

// Giving it:
// setCount
// would be unnecessary.

// Think of it like giving someone a TV remote when they only want to watch the current channel.
// They don't need the remote if they aren't changing anything.



// Q4. Why is the state inside App now instead of inside Counter? 
// Who needs the count?
// Counter ✅
// Result ✅

// Whenever multiple components need the same state, the state should live in their closest common parent.

// Here:
// App
// │
// ├── Counter
// └── Result

// The closest common parent is:
// App

// That's why the state belongs there.

// Here's a Rule Every React Developer Follows
// If only one component needs a piece of state, keep the state inside that component.

// Example:
// PasswordToggle

// Only this component needs:
// showPassword

// So:
// const [showPassword, setShowPassword] = useState(false);

// stays inside PasswordToggle.
// No need to move it.

// But if:

// Component A
// and
// Component B

// both need the same state,

// then move it to:
// Parent

// This is lifting state up.
