import React from 'react'
import ListItemCart from './ListItemCart'
import DeleteCart from './DeleteCart'
import ModalBuy from './ModalBuy'
import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import axios from '../../../axio/axios'


async function getProducts(pageNumber){

  const session = await getServerSession(options)
  // console.log(session)

  let isMounted = true;
  const controller = new AbortController();

  try {
      const response = await axios.get(`/cart/${session?.user?.name}`, {
          signal: controller.signal
      });
      // console.log(response.data);
      return response.data
    
  } catch (err) {
      console.error(err);
      
  }

  return () => {
      isMounted = false;
      controller.abort();
  }

  

}


async function ListItemsCart() {

  const session = await getServerSession(options)
    // console.log(session)

    const productos = await getProducts()
    console.log(productos)

   

    if (!session) {
        redirect('/login')
    }
  return (
    <div>
        {productos?.cartProducts?.map(product => {
            return (
                <div  key={product._id} className='py-1'>
                <ListItemCart product={product.product}>
                  <ModalBuy producto={[product]} />
                  <DeleteCart />
                </ListItemCart>
                </div>
            )
        })}
    </div>
  )
}

export default ListItemsCart