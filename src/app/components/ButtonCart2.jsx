'use client'
 
import { Button } from '@nextui-org/button'
import React from 'react'
import { useGlobalContext } from '../context/GlobalContext'

function ButtonCart2({product}) {

  const {carrito, color, setColor, isOpen, handleToggle, newItemCarrito} = useGlobalContext();
  function addToCart(){
    newItemCarrito(product)
    handleToggle()
  }

  return (
    <Button radius="full" color="primary" onPress={addToCart} className="w-full  self-end justify-self-end  text-white shadow-lg">Carrito</Button>
  )
}

export default ButtonCart2