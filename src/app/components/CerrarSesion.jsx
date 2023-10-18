'use client'
import { Button } from '@nextui-org/button'
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from 'react'
import { useSession } from "next-auth/react"
import Link from 'next/link';
import { CartIcon } from './icon/cartIcon';


function CerrarSesion() {

  const { data: session, status } = useSession()
  const router = useRouter();


  return (
    <>
    

     {session ? 
     <div className='flex items-center gap-1'>
      <div className='flex flex-col'>

        <Button className='m-0' onClick={() => {
            
            signOut({ redirect: false }).then(() => {
              router.push("/"); // Redirect to the home page after signing out
            });
          }}
          >Cerrar Sesion</Button> 

          <p style={{fontSize: '11px',  marginLeft: '6px'}} className=' text-black'><strong>Cuenta:</strong> {session?.user?.name}</p>
      </div>
      
      <Link href={`/carrito`}><CartIcon size={50} /></Link>
      </div>
      : <Link href='/login'>Iniciar sesion</Link>}
    
    </>
  )
}

export default CerrarSesion