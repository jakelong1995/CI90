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

{/* <ul>
        {items.map(i =>(
            <li key={i.id}
            style={{
                color: i.completed ? 'gray' : 'blue',
                textDecoration: i.completed ? 'line-through' : 'none'}}>
                {i.name} - {i.quantity}
            </li>
        ))}
    </ul> */}