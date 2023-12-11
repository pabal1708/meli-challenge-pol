import React from 'react'
import Cash from '../assets/icons/cash'
import QrCode from '../assets/icons/qrCode'
import CreditCard from '../assets/icons/creditCard'

 const IconSelector = ({ type, size }) => {
    const isCash = type === "cash";
    const isQr = type === "qr"
    const isCard = type === "card"
    const isSmall = size === "small"

    const iconClass = isSmall ? "type-icon-small" : "type-icon"

    return (
    <div className={iconClass}>
    {isCash && (
    <Cash isSmall={isSmall}/>
    )}
    {isQr &&
    (<QrCode isSmall={isSmall}/>)} 
    {isCard && (
    (<CreditCard isSmall={isSmall}/>)
    )}

    </div>
  )
}
export default IconSelector;
