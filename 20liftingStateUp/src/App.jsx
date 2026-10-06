import { useState } from "react"
import NameInput from "./NameInput"
import NameDisplay from "./NameDisplay"


function App() {

  const [name, setName] = useState("")
  

  return (
    <>
      <NameInput name={name} setName={setName}/>
      <NameDisplay name={name}/>
    </>
  )
}

export default App




// Initially:

// const [name, setName] = useState("")

// The state belongs to App.s

// Then App passes it down:

// <NameInput name={name} setName={setName} />
// <NameDisplay name={name} />

// So:

// 1. You type "Sayan"

// NameInput runs:

// onChange={(e) => setName(e.target.value)}

// 2. setName() updates the state in App

// name: "" → "Sayan"

// 3. App re-renders

// It now passes:

// <NameDisplay name="Sayan" />

// 4. NameDisplay displays it

// <h2>Hello, {name}</h2>

// Result:

// Hello, Sayan



// Important reminder: The component that owns the state is responsible for managing the state. Other components can receive and use that state through props. 