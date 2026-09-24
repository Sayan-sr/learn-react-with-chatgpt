import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PassingString from './PassingString'
import PassingNumber from './PassingNumber'
import PassingArrays from './PassingArrays'
import PassingObjects from './PassingObjects'

function App() {

  return (
    <>
      <PassingString name="Sayan" role="Python Developer" />

      <PassingNumber a={10} b={20} />

      <PassingArrays skills={["Python", "Sql", "JavaScript"]} />

      <PassingObjects userInfo={{name: "Sayan", role: "Data Engineer"}} />
    </>
  )
}

export default App
