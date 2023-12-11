import React, { useState } from 'react'
import Button from '../button/index'
import List from './list'

 const Dropdown = ({text, dropdownfilterData}) => {
    const [isOpen, setIsOpen] = useState(false)
    const onClickHandler = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div>
        <Button text={text} type="dropdown" onClick={onClickHandler}/>
        {isOpen && (
        <List setIsOpen={setIsOpen} dropdownfilterData={dropdownfilterData}/>
        )}
    </div>
  )
}

export default Dropdown