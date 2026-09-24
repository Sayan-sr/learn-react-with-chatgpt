import React from 'react'

function Profile() {

    const name = "Sayan"
    const role = "Python Developer"

  return (
    <div>
        <h2>Hello, {name} this side</h2>
        <p>I am a {role}</p>
    </div>
  )
}

export default Profile