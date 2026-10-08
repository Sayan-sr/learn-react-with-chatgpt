import Card from "./Card"
import Profile from "./Profile"
import Skills from "./Skills"


function App() {
  

  return (
    <>
      {/* <Card>
        <h2>User Profile</h2>
        <p>Name: Sayan</p>
      </Card>

      <Card>
        <h2>Account</h2>
        <p>Balance: ₹10,000</p>
      </Card>

      <Card>
        <h2>Notifications</h2>
        <p>You have 3 alerts</p>
      </Card> */}

      {/* <Card>
        <h2>User Profile</h2>
        <p>Name: Sayan</p>
      </Card>

      <Card>
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </Card>
      
      <Card>
        <h2>Message</h2>
        <p>Welcome back, Sayan!</p>
      </Card> */}


      <Card>
        <Profile />
        <Skills />
      </Card>
    </>
  )
}

export default App
