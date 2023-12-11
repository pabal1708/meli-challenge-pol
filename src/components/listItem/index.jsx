import React, { useContext } from 'react'
import { Context } from '../../context/context';
import ChevronRight from '../assets/icons/chevronRight';
import IconSelector from './icon'
import Description from './description';


const ListItem = () => {

  const { filteredTransactions } = useContext(Context);

  return (
    <>
      {filteredTransactions?.map(({ id, type, title, description, amount, index }) =>
        <a key={index} className="list-item-container" href={`http://localhost:3000/detail?id=${id}`} data-testid="list-item">
          <div className="list-item-main">
            <IconSelector type={type} size="small" />
            <Description title={title} description={description} />
          </div>
          <div className="list-item-amount">
            <div>{amount}</div>
            <ChevronRight />
          </div>
        </a>
      )}
    </>
  )
}
export default ListItem;