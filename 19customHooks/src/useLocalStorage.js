import { useEffect, useState } from "react";



function useLocalStorage(key, initialValue){

    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key)

        return storedValue !== null ? storedValue : initialValue
    })

    useEffect(() => {
        localStorage.setItem(key, value)
    }, [key, value])

    return [value, setValue]
}

export default useLocalStorage


// mental model to remember 
// 1. initialValue
//    ↓
//    What should I use if nothing is saved?

// 2. localStorage.getItem()
//    ↓
//    Do I already have a saved value?

// 3. useEffect + setItem()
//    ↓
//    Save the new value whenever it changes.

// 4. return [value, setValue]
//    ↓
//    Give the component state + the update function.




// the entire concept of the whole code is 
// Create a reusable state system that remembers its value in localStorage.

// The component gives me a storage key and a starting value.

// First, I check localStorage for an existing value.

// If one exists, I use it.

// If one doesn't exist, I use the starting value.

// Whenever the value changes, I save the new value to localStorage.

// Finally, I give the component the value and the function needed to change it.