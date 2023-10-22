import React from 'react'
import CardItem2 from './CardItem2';
import axios from '../../../axio/axios';
import ButtonCta from './Button';
import { getServerSession } from "next-auth/next"
import { options } from "../api/auth/[...nextauth]/options"

async function getProducts(pageNumber){
    let isMounted = true;
    const controller = new AbortController();

    try {
        const response = await axios.get(`/productos/limited`, {
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

async function Gallery() {

    const products = await getProducts()
    const session = await getServerSession(options)
    // console.log('item2', products)

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 py-8">

{products.map((product) => { 
              Object.entries(product?.tallas).map(([size, colors]) => 
              colors.map((color, index) =>
              
              color.quantity > 0 && 

              <CardItem2 key={product._id} product={product}>
              <ButtonCta user={session?.user} product={[product]} />
            </CardItem2>
              ))
             
            })}
        
  
</div>
  )
}

export default Gallery