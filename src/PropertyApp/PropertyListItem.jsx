import React from 'react'

const PropertyListItem = ({name, rating, price}) => {
  return (
    <li>
        {name} {rating} {price}
    </li>
  )
}

export default PropertyListItem