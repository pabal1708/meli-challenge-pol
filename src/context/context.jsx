import React, { createContext, useState, useEffect } from 'react';


export const Context = createContext();

const ContextProvider = ({children}) => {
  const [filteredTransactions, setFilteredTransactions] = useState();
  const [totalAmount, setTotalAmount] = useState();

  const calculateAmount = () => {
     const filteredAmount = filteredTransactions?.map((e)=> parseInt(e.amount));
      const totalAmount = filteredAmount?.reduce((prev, curr) =>prev + curr, 0)
      const formatedNumber =  new Intl.NumberFormat('de-DE').format(totalAmount)
      setTotalAmount(formatedNumber)
  }
  
 useEffect(() => {
  calculateAmount()
 })
 

  return(
    <Context.Provider value={{ filteredTransactions, totalAmount, setFilteredTransactions }}>
      { children }
    </Context.Provider>
  )
}

export default ContextProvider
