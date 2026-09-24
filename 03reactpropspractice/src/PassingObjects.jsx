import React from 'react'

function PassingObjects({userInfo}) {
  return (
    <div>
        <h2>{userInfo.name}</h2>
        <p>{userInfo.role}</p>
    </div>
  )
}

export default PassingObjects