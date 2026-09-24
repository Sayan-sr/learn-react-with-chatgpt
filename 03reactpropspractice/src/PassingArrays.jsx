import React from 'react'

function PassingArrays({skills}) {
  return (
    <div>
        <p>{skills[0]}</p>
        <p>{skills[1]}</p>
        <p>{skills[2]}</p>
    </div>
  )
}

export default PassingArrays