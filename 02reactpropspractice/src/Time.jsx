import React from 'react'

function Time() {

    const time = new Date().toLocaleTimeString()
  return (
    <div>
        <p>Current Time: {time}</p>
    </div>
  )
}

export default Time