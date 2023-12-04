import React from 'react'

function ShoppingListItem({name,quantity,completed}) {
    const style={
        color : completed ? 'gray' : 'blue',
        textDecoration: completed ? 'line-through' : 'none'
    }
  return (
    <li style={style}>
        {name} - {quantity}
    </li>
  )
}

export default ShoppingListItem
