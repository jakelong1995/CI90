import React from 'react'

export default function Slots({val1,val2,val3}) {
  const iswinner = val1 === val2 && val1 === val3;
  return (
    <div>
      <h1>{val1} {val2} {val3}</h1>
      <h2 style={{color:iswinner ? 'green':'red'}}>{iswinner ? 'you win!' : 'you lose'}</h2>
      {iswinner && <h3>Congrats!</h3>}
    </div>
  )
}
