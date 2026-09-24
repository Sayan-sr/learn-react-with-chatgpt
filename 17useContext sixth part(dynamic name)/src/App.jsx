import { useState } from "react"
import UserContext from "./UserContext"
import Profile from "./Profile"


function App() {

  const [name, setName] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  function login(){
    setIsLoggedIn(true)
  }


  function logout(){
    setIsLoggedIn(false)
  }
  

  return (
    <>
      <UserContext.Provider value={{name, setName, isLoggedIn, login, logout}}>
          <Profile />
      </UserContext.Provider>
    </>
  )
}

export default App
