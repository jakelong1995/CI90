import React, { useState } from 'react'


const ColorBox = () => {
    const [color, setColor] = useState('red');
    const togglesetColor = () => setColor('green');

  return (
    <div>
        <button onClick={togglesetColor}>hello</button>
        <div className='w-40 h-40 m-auto' style={{backgroundColor: color}}/>
    </div>
  )
}

export default ColorBox