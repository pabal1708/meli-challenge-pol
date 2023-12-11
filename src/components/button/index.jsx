import React from 'react'
import ChevronDown from '../assets/icons/chevronDown'



const Button = ({ text, type, onClick }) => {

  const isDropdown = type === 'dropdown';
  const isSecondary = type === 'secondary';
  const classType = isSecondary ? 'button-secondary' : 'button'


  return (
    <div className="button-container">
      <a className={classType} onClick={onClick}>
        {text}
        {isDropdown && (
          <div className="button-chevron">
            <ChevronDown />
          </div>
        )}
      </a>
    </div>
  )
}
export default Button
