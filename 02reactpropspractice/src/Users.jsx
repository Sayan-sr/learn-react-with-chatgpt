import React from 'react'

function Users(props) {

  return (
    <div>
        <h2>Hello, {props.name} this side</h2>
        <p>I am a {props.role}</p>
    </div>
  )
}

export default Users