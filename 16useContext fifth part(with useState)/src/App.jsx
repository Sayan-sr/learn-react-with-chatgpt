import { useState } from "react"
import UserContext from "./UserContext"
import Profile from "./Profile"


function App() {

  const name = "Sayan"

  const [isLoggedIn, setIsLoggedIn] = useState(false)


  function login(){
    setIsLoggedIn(true)
  }

  function logout(){
    setIsLoggedIn(false)
  }
  
  
  return (
    <>
      <UserContext.Provider 
      value={{isLoggedIn, name, login, logout}}
      >
          <Profile />
      </UserContext.Provider>
    </>
  )
}

export default App
