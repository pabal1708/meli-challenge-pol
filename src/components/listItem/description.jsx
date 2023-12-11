
import React from 'react'

 const Description = ({title, description}) => {
  return (
    <div className="list-item-description">
    <div className="list-item-data">{title}</div>
    <div className="list-item-box">{description}</div>
  </div>
  )
}

export default Description
