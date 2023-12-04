import React from 'react'
import Appcontainer from './BigAssignment/Appcontainer'
import Slots from './Slots'
import ShoppingList from './ShoppingList'


const App = () => {
  const data = [
    {id: 1, name: 'eggs', quantity: 12, completed: false},
    {id: 2, name: 'beef', quantity: 3, completed: true},
    {id: 3, name: 'chicken', quantity: 2, completed: true},
    {id: 4, name: 'veggie', quantity: 1, completed: false}
  ]
  return (
    <Appcontainer/>
    // <Slots val1='7️⃣' val2='7️⃣' val3='7️⃣'/>
    // <ShoppingList items={data}/>
  )
}

export default App