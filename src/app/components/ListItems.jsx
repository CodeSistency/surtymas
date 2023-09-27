import React from 'react'
import ListItem from './ListItem'

function ListItems({products}) {
  return (
    <div>
        {products.map(product => {
            return (
                <div  key={product._id} className='py-1'>
                <ListItem product={product}/>
                </div>
            )
        })}
    </div>
  )
}

export default ListItems