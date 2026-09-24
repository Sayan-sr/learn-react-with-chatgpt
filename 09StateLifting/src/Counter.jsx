

function Counter({count, setCount}){

    return(
        <div>
            <h2>Counter Component</h2>

            <h3>Count: {count}</h3>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </div>
    )
}

export default Counter


// There is only one state.
// const [count, setCount] = useState(0); 

// Where is it?
// Inside: App 

// Not inside: Counter 
// Not inside: Result 

// There is only one source of truth.
// App
// │
// └── count = 3

// Both components simply receive that value.



// Think of It Like a Family 
// Imagine a family: 
// Dad (App)
// │
// ├── Son (Counter)
// └── Daughter (Result)

// The father has a TV remote.
// Remote = count state 

// The son doesn't own the remote.
// The daughter doesn't own the remote. 

// The father owns it. 

// If the son says: Increase the volume. 

// He asks the father. 
// The father changes it. 

// Now both children see the new volume. 


// Exactly the same happens in React. 
// Counter
//      │
//      │ setCount()
//      ▼
// App updates count
//      │
//      ▼
// Counter receives new count

// Result receives new count


// This Is the Flow 
// Click Increase
//         │
//         ▼
// Counter calls

// setCount(count + 1)

//         │
//         ▼
// App updates count

//         │
//         ▼
// React re-renders

//         │
//         ├──────────────┐
//         ▼              ▼
// Counter          Result

// Both receive

// count = 1


// state lifting actually a combination of two concepts
// State (useState)
// Props