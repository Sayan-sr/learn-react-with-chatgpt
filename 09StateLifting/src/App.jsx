import Counter from "./Counter"
import Result from "./Result"

import NameInput from "./NameInput"
import Greeting from "./Greeting"

import { useState } from "react"


function App() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  

  return (
    <>
      {/* <Counter 
      count={count}
      setCount={setCount}
      />

      <Result 
      count={count}
      /> */}

      <NameInput 
      name={name}
      setName={setName}
      />

      <Greeting 
      name={name}
      />
    </>
  )
}

export default App
