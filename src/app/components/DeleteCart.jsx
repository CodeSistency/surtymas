'use client'
import React from 'react'
import { Image } from '@nextui-org/image';
import { useGlobalContext } from '../context/GlobalContext'

function DeleteCart({product}) {

    const {carrito, color, setColor, removeFromCart} = useGlobalContext();
    console.log(product)
  return (
    
        <Image src='/delete1.svg' style={{cursor: 'pointer'}} onClick={() => removeFromCart(product._id)} width={50}/>
    
  )
}

export default DeleteCart