import Profile from "./Profile"
import UserContext from "./UserContext"


function App() {


  const user = {
    name: "Sayan",
    age: 22,
    isLoggedIn: true
  }
  

  return (
    <>
      <UserContext.Provider value={user}>
        <Profile />
      </UserContext.Provider>
    </>
  )
}

export default App
