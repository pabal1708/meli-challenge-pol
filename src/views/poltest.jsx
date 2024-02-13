import React from 'react'
import SvgController from '../components/iconLib/svgController'
import Desc from '../components/desc/index'

const poltest = () => {
    const type="QrCode";
  return (
    <div className='container-pol'>
    <SvgController iconName={type} width="45" height="45"/>
    <Desc type={type}/>
</div>

  )
}

export default poltest