import React from 'react'
import data from './data';

 const Desc = ({ type }) => {
    enum DataSelector {
        QrCode = "QrCode",
        Cash= "Cash"
    }
    const texts = data[DataSelector[type]];
    const {name, button, classname} = texts;
  return (
    <div className={classname}>
    <div>{name}</div>
    <p>{button}</p>
    </div>
  )
}

export default Desc