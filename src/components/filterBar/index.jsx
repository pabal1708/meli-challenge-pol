import React, {useContext, useEffect} from 'react'
import Dropdown from '../dropdown';
import { Context } from '../../context/context';
import paramToArrayFilter from '../../utils/stringManagement'


 const FilterBar = ({ transactions, filter, dropdownfilterData }) => {
  
    const { totalAmount, setFilteredTransactions  } = useContext(Context);

 

    const filterTransactions = () => {
       
        if (filter) {
           const paymentFilter = paramToArrayFilter(filter);
            setFilteredTransactions(transactions.filter((t)=> paymentFilter.includes(t.type)))
        } else {
            setFilteredTransactions(transactions)
        }
    }

useEffect(() => {
    filterTransactions()
}, [filter])

  return (
    <div className="filter-bar-container" data-testid="filter-bar">
        {totalAmount && (
        <div className='filter-bar-amount'> $
       {totalAmount}
       </div>
       )}
       <Dropdown dropdownfilterData={dropdownfilterData} text="Filtros"/>
    </div>
  )
}
export default FilterBar