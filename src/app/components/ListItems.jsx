import React from 'react'
import ListItem from './ListItem'
import DeleteCart from './DeleteCart'
import ModalBuy from './ModalBuy'

function ListItems({products}) {
  return (
    <div  >
        {products.map(product => {
            return (
                <div  key={product._id} className='py-1'>
                <ListItem product={product}>
                  <ModalBuy producto={[product]} />
                  {/* <DeleteCart /> */}
                </ListItem>
                </div>
            )
        })}
    </div>
  )
}

export default ListItems