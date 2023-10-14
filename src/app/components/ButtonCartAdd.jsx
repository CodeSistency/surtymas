'use client'
import { Button } from '@nextui-org/button'
import React, { useState } from 'react'
import axios from '../../../axio/axios';
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react"
import Link from 'next/link';

function ButtonCartAdd({product, user}) {

  const { data: session, status } = useSession()

  console.log(session)

  const router = useRouter()

  const [success, setSuccess] = useState(false)
  const [isLoadingCreate, setIsLoadingCreate] = useState(false)
  const [error, setError] = useState(false)

  const handleCart = async (username, nombre, precio, precio_mayor, imagen, id, codigo, tallas, tallas_zapatos) => {

    // console.log(username, nombre, precio, precio_mayor)
  let isMounted = true;
    const controller = new AbortController();
    const quantity = 0
  
    console.log(username, nombre, precio, precio_mayor, codigo)
  
    if(!username){
      router.push("/login")
    }
    
      try {
        setError(false)
        setIsLoadingCreate(true)
          const response = await axios.put('cart', { username, nombre, precio, precio_mayor, quantity, imagen, id, codigo, tallas, tallas_zapatos},
        //   JSON.stringify({username, nombre, precio, precio_mayor, quantity}),
          { 
              signal: controller.signal,
              
          });
          console.log(JSON.stringify(response?.data));
        //   isMounted && setCart(response.data);
        setSuccess(true)
       
          
      } catch (err) {
          console.error(err);
          setError(true)

          // if(!username){
          //   router.push("/login")
          // }
  
      }
  
      return () => {
          isMounted = false;
          controller.abort();
      }
  
    
  }

  return (
    <>
 { session ? <Button radius="full" onPress={() => handleCart(session.user.name, product.titulo, product.precio, product.precio_mayor, product.imagenes[0], product._id, product.codigo, product.tallas, product.tallas_zapatos)} color={`${success ? "success" : "primary"}`} variant="shadow"  className="w-full  self-end justify-self-end text-white shadow-lg">
    {error ? 'Intentar de nuevo' : success ? 'Agregado' : isLoadingCreate ? 'Cargando...' : 'Agregar al carro'}
  </Button> :
  
  <Link href={`/login`} style={{borderRadius: '50px', color: 'white'}} className='w-full bg-blue-600 text-white px-3 py-2 mt-5'>Agregar al Carrito</Link>}
    
    </>
  )
}

export default ButtonCartAdd