import Profile from "./Profile"
import UserContext from "./UserContext"


function App() {

  const name = "Sayan"
  

  return (
    <>
      <UserContext.Provider value={name}>
        <Profile />
      </UserContext.Provider>
    </>
  )
}

export default App
