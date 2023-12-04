import React from 'react'
import PropertyListItem from './PropertyListItem'

const PropertyList = ({items}) => {
  return (
    <ul>
        {items.map(i =>(
        <PropertyListItem key={i.id} {...i}/>
        ))}
    </ul>
  )
}

export default PropertyList