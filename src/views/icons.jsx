import React from 'react'
import SvgController from '../components/iconLib/svgController'

 const Icons = (type) => {
  return (
    <div>
        <SvgController iconName={type} width="45" height="45"/>
    </div>
  )
}
export default Icons