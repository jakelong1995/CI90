import React from 'react'
import ShoppingList from './ShoppingList'


const ShoppingListApp = () => {
  const data = [
    {id: 1, name: 'eggs', quantity: 12, completed: false},
    {id: 2, name: 'beef', quantity: 3, completed: true},
    {id: 3, name: 'chicken', quantity: 2, completed: true},
    {id: 4, name: 'veggie', quantity: 1, completed: false}
  ]
  
  return (
    <ShoppingList items={data}/>
  )
}

export default ShoppingListApp