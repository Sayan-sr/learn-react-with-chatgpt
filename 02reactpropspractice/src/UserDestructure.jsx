import React from 'react'

function UserDestructure({name, role}) {
  return (
    <div>
        <h2>Hello, {name} this side</h2>
        <p>I am a {role}</p>
    </div>
  )
}

export default UserDestructure