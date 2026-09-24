import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Condition from './Condition'
import PasswordToggle from './PasswordToggle'
import NameValidation from './NameValidation'

function App() {

  return (
    <>
      {/* <Condition name="Saiful" /> */}
      <PasswordToggle />
      {/* <NameValidation /> */}
    </>
  )
}

export default App
