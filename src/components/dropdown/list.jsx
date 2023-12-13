import React, { useState } from 'react'
import Item from './item'
import Button from '../button/index'
import { useRouter } from 'next/router'

 const List = ({ setIsOpen, dropdownfilterData }) => {
    const router = useRouter()
    const [filterParam, setFilterParam] = useState()


    
    const pushFilter = () =>{
    router.push(`/?filter=${filterParam}`)
    setIsOpen(false)
    }

    const cleanFilter = () => {
        router.push("https://meli-challenge-pol.vercel.app/")
        setIsOpen(false)
    }
  
    return (
    <div className="dropdown-list">
        <div className="dropdown-checkbox-container">
        {dropdownfilterData?.map(({ text, value, index})=>
        <Item key={index} text={text} value={value} setState={setFilterParam} />
        )}
        </div>
        <div className="dropdown-button-container">
        <Button text="Aplicar" onClick={pushFilter}/>
        <Button text="Limpiar" type="secondary" onClick={cleanFilter}/>
        </div>
    </div>
  )
}

export default List