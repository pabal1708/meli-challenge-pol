import React from 'react'

 const ItemList = ({key, text, value,  setState}) => {

  

  const onChangeHandler = (e) => {
    setState((prev) => prev ?  (`${prev} ${e.target.value}`) : e.target.value)
  }
  
  return (
    <div className="dropdown-checkbox">
<label>
  <input key={key} className="dropdown-checkbox-input" type="checkbox"  value={value} name="radio"  onChange={onChangeHandler}/>
  {text}
</label>
</div>
  )
}
export default ItemList;
