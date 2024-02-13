import React from 'react'
import BackArrow from './backArrow'
import Cash from './cash'
import ChevronDown from './chevronDown'
import QrCode from './qrcode'
import Card from './card'

 const SvgController = ({ iconName, width, height }) => {


  return (
    <svg width={width} height={height} viewBox="0 0 33 33" fill="white" xmlns="http://www.w3.org/2000/svg">
    {iconName === 'BackArrow' && (<BackArrow />)}
    {iconName === 'Cash' && (<Cash />)}
    {iconName === 'ChevronDown' && (<ChevronDown />)}
    {iconName === 'QrCode' && (<QrCode />)}
    {iconName === 'Card' && (<Card />)}
    </svg>
  )
}
export default SvgController