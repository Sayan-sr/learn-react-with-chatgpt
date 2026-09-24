import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import User from './User'
import Expression from './Expression'
import Time from './Time'
import Profile from './Profile'
import Users from './Users'
import UserDestructure from './UserDestructure'

function App() {

  return (
    <>
      <h1>Hello Sayan</h1>
      <p>I am learning React step by step</p>

      <h2>I am a Python Developer</h2>

      <User />
      <Expression />
      <Time />
      <Profile />

      <Users name="Sayan" role="Python Developer" />
      <Users name="Disha" role="Web Developer" />

      <UserDestructure name="Saiful" role="Data Engineer" />
      <UserDestructure name="Abir" role="AI Engineer" />

    </>
  )
}

export default App
