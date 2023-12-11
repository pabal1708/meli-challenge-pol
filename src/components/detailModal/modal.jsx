import React from 'react'
import Icon from '../listItem/icon'

 const Modal = ({ type, title, description, amount}) => {
  return (
    <>
    <Icon type={type}/>
    <div key={title} className="detail-modal-text">{title}</div>
    <div className="detail-modal-description">{description}</div>
    <div className="detail-modal-text">$ {amount}</div>
    </>
  )
}
export default Modal