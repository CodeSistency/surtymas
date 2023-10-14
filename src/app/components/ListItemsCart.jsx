import React from 'react'
import ListItemCart from './ListItemCart'
import DeleteCart from './DeleteCart'
import ModalBuy from './ModalBuy'
import ModalBuyCart from './ModalBuyCart'
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
        {productos?.cartProducts?.map((product, i) => {
            return (
                <div  key={i} className='py-1'>
                <ListItemCart product={product.product}>
                  {/* <ModalBuy producto={[product]} /> */}
                  <ModalBuyCart id={product.product} />

                  <DeleteCart user={session?.user?.name} id={product.product}/>
                </ListItemCart>
                </div>
            )
        })}
    </div>
  )
}

export default ListItemsCart