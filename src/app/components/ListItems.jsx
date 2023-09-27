import React from 'react'
import ListItem from './ListItem'

function ListItems({products}) {
  return (
    <div>
        {products.map(product => {
            return (
                <div className='py-1'>
                <ListItem product={product}/>
                </div>
            )
        })}
    </div>
  )
}

export default ListItems