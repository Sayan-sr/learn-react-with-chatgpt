import Profile from "./Profile"
import User from "./User"

function App() {

  // const name = "Sayan"
  const name = "Disha"

  const a = 20
  const b = 10

  const time = new Date().toLocaleTimeString()

  return (
    <>
    <h1>Hello {name}</h1>
    <p>I am learning react step by step</p>

    <h2>I am a Python Developer</h2>

    <p>Sum is: {a + b}</p>

    <p>Current Time: {time}</p>

    <Profile/>

    <User name = "Sayan" role = "Python Developer"/>
    <User name = "Disha" role = "Web Developer"/>

    
    </>
  )
}

export default App
