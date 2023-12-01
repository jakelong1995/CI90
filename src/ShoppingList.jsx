import React from 'react'

function ShoppingList({items}) {
  return (
    <ul>
        {items.map(i =>(
            <li key={i.id}
            style={{
                color: i.completed ? 'gray' : 'blue',
                textDecoration: i.completed ? 'line-through' : 'none'}}>
                {i.name} - {i.quantity}
            </li>
        ))}
    </ul>
  )
}

export default ShoppingList