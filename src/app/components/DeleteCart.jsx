'use client'
import React from 'react'
import { Image } from '@nextui-org/image';
import { useGlobalContext } from '../context/GlobalContext'
import axios from '../../../axio/axios';

function DeleteCart({product, id, user}) {

    const {carrito, color, setColor, removeFromCart} = useGlobalContext();
    console.log(product)

    const handleDelete = async (id) => {

      let isMounted2 = true;
      const controller = new AbortController();
      console.log(id)
      
      
      try {
          const response = await axios.delete(`cart/${user}/${id}`,
          
      
      {
              signal: controller.signal
          });
          console.log(JSON.stringify(response?.data));
          
          
          
          
      } catch (err) {
          console.error(err);
          console.log(JSON.stringify(err));
          
          
      }
  
      return () => {
          isMounted2 = false;
          controller.abort();
      }
  }
  return (
    
        // <Image src='/delete1.svg' style={{cursor: 'pointer'}} onClick={() => removeFromCart(product._id)} width={30}/>
        <Image src='/delete1.svg' style={{cursor: 'pointer'}} onClick={() => handleDelete(id)} width={30}/>
    
  )
}

export default DeleteCart