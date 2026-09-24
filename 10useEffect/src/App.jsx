import { useEffect, useState } from "react"
import Timer from "./Timer"

function App() {

  // const [count, setCount] = useState(0)
  // const [name, setName] = useState("")

  // console.log("Component Rendered");



  // without dependency array 
  // useEffect(() => {
  //   console.log("useEffect Executed!");
    
  // })
  

  // empty dependency array
  // useEffect(() => {
  //   console.log("useEffect Executed");
    
  // }, [])  // [], This tells react: "Run this effect only after the first render. After that, ignore all future re-renders.". That's why After clicking Increase 5 times, useEffect Executed does not run again.

  // When the page first loads, useEffect Executed will print once.
  // Why ? Because the component rendered for the first time, and useEffect(..., []) always runs after the initial render.
  

  // When the page first loads, this will return
  // Component Rendered
  // Count Changed
  // Even though [count] is in the dependency array, useEffect always runs after the initial render. 

  // Click Increase once, this will happen
  // Component Rendered
  // Count Changed
  // When you click: the value of count changes. 

  // Suppose we also add another state: 
  // const [name, setName] = useState(""); 
  // But the dependency array is still: [count]
  // Now suppose we do: setName("Sayan"); 
  // Which variable changed? 
  // count ❌
  // name ✅

  // Now React checks the dependency array: [count]
  // React asks: "Did count change?" "No"
  // Since the answer is No, React does not execute the effect.

  // The RULE: Run after the first render, and then run again only when count changes. 

  // Not when:
  // name changes ❌
  // age changes ❌
  // Any other state changes ❌

  // Only when:
  // count changes ✅

  // useEffect(() => {
  //   console.log("useEffect Executed");
    
  // }, [count, name])

  return (
    <>
      {/* <h2>{count}</h2>

      <input 
      type="text" 
      value={name}
      onChange={() => setName("Sayan")}
      />

      <button onClick={() => setCount(count + 1)}>
        Increase 
      </button> */}

      <Timer />
    </>
  )
}

export default App


// Summary Table
// | Syntax                               | Runs on Initial Render?  | Runs on Re-render?                   |
// | ------------------------------------ | -----------------------  | ------------------------------------ |
// | `useEffect(() => {})`                | ✅ Yes                  | ✅ Every re-render                 |
// | `useEffect(() => {}, [])`            | ✅ Yes                  | ❌ Never again                     |
// | `useEffect(() => {}, [count])`       | ✅ Yes                  | ✅ Only when `count` changes       |
// | `useEffect(() => {}, [count, name])` | ✅ Yes                  | ✅ When `count` or `name` changes  |

