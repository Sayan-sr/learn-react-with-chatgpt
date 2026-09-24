// import Parent from "./Parent"
import Profile from "./Profile"
import UserContext from "./UserContext"


function App() {

  const name = "Sayan"

  return (
    <>
      {/* <Parent name={name}/> */}
      <UserContext.Provider value={name}>
        <Profile />
      </UserContext.Provider>
    </>
  )
}

export default App
