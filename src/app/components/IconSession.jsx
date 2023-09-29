'use client'
import { Dropdown, DropdownTrigger, DropdownItem, DropdownMenu } from '@nextui-org/dropdown'
import { User } from '@nextui-org/user'
import { Avatar } from '@nextui-org/avatar'
import React from 'react'
import { signOut } from "next-auth/react";
import Link from 'next/link'

function IconSession({user}) {
  return (
    <div className="flex items-center gap-4">
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          src={User}
        />
      </DropdownTrigger>
      {user ?<DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold text-gray-900">Usuario</p>
          <p className="font-semibold text-gray-500">{user}</p>
        </DropdownItem>
        
        <DropdownItem key="logout" color="danger">
        <p onClick={signOut} className="font-semibold text-red-600">Cerrar sesion</p>
        </DropdownItem>
      </DropdownMenu>
        :
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        
        
        <DropdownItem key="login" color="primary">
        <Link href={`/login`}>Iniciar Sesion</Link>
        </DropdownItem>
      </DropdownMenu>}
    </Dropdown>
    
  </div>
  )
}

export default IconSession