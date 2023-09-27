'use client'
import { Button } from '@nextui-org/button'
import { signOut } from "next-auth/react";
import React from 'react'

function CerrarSesion() {
  return (
    <Button className='m-0' onClick={signOut}>Cerrar Sesion</Button>
  )
}

export default CerrarSesion