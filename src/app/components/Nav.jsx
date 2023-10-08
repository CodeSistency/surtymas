import Image from "next/image";
import Link from "next/link";
// import {IoCartOutline, IoCartSharp} from "react-icons/io5"
// import {AiOutlineMan, AiOutlineWoman} from 'react-icons/ai'
// import {BiMenu, BiUser} from 'react-icons/bi'
// import {LiaSearchSolid} from 'react-icons/lia'
// import {BsInstagram} from 'react-icons/bs'
import { signOut } from "next-auth/react";
// import { Button } from "@nextui-org/button";
import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import {CartIcon} from "./icon/cartIcon";
import InputNav from './InputNav'
import IconSession from './IconSession'
import { Button } from "@nextui-org/button";
import { Suspense } from "react";
// import { Drawer } from "flowbite";
import Drawer from './Drawer'

export default async function Nav({children}) {

  const session = await getServerSession(options)

  return (
    <>
    <nav style={{zIndex: '100'}}>
          <section className='nav-top'>
            {/* <div className='nav-top-left'> */}
            <Link href={`/`}>
                <Image 
                className='logo'
                src='/logo3.svg'
                width={140}
                height={140}
                alt="Logo"
                priority='true'
                
                />
            
            </Link>
             <Drawer />

            {/* <div class="text-center">
   <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example">
   Show right drawer
   </button>
</div>


<div id="drawer-right-example" class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-right-label">
    <h5 id="drawer-right-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="w-4 h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>Right drawer</h5>
   <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Close menu</span>
   </button>
   <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">Supercharge your hiring by taking advantage of our <a href="#" class="text-blue-600 underline font-medium dark:text-blue-500 hover:no-underline">limited-time sale</a> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.</p>
   <div class="grid grid-cols-2 gap-4">
      <a href="#" class="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn more</a>
      <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get access <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg></a>
   </div>
</div> */}

                
                {/* <Link href="/api/auth/signout">Cerrar sesion</Link> */}
                {/* <Button onClick={signOut}/> */}
                {/* <Link href="/login">Iniciar sesion</Link> */}
                {/* <Link href="/registro">Registro</Link> */}
              {/* <Menu toggleMenu={toggleMenu} onClick={toggleMenu} isOpen={menuVisible}></Menu>
              {auth?.user ? <Link to={'home/genero/hombre'}><AiOutlineMan className='gender-icon' color='#0d3f71' fontSize={35}/></Link> : <Link to={'genero/hombre'}><AiOutlineMan className='gender-icon' color='#0d3f71' fontSize={35}/></Link>}
              {auth?.user ? <Link to={'home/genero/mujer'}><AiOutlineWoman className='gender-icon' color='pink' fontSize={35}/></Link> : <Link to={'genero/mujer'}><AiOutlineWoman className='gender-icon' color='pink' fontSize={35}/></Link>}
            </div>
            {auth?.user ? <Link to={'/home'}><img src="/logo3.svg" className='logo' alt='logo'/></Link> : <Link to={'/'}><img src="/logo3.svg" className='logo' alt='logo'/></Link>}
            <div className='nav-top-right'>
            <Link to={'/sesion'}><BsInstagram className='user-icon' fontSize={30}/></Link>
              <div className='cart-icon'>{cartIcon()}</div>
              <Link to={'/Login2'}><BiUser className='user-icon' fontSize={35}/></Link> */}
            {/* </div> */}

            {
                  session 
                  ? 
                  <div className="flex items-center gap-1">
                    
                    <Suspense fallback={<Button>Cerrar sesion</Button>}>

                      {children}
                    </Suspense>
                    
                    <Link href={`/carrito`}><CartIcon size={50}/></Link>
                  
                  </div>
                  
                  : <div className="flex items-center gap-1"> 
                  
                      <Link href="/login">Iniciar sesion</Link>
                    
                      <Link href={`/carrito`}><CartIcon size={50} /></Link>
                    </div>

                } 
                
                 {/* <CartIcon size={50} /> */}
          </section>

          <section className='nav-bottom'>

            <ul className="navbar">
              
                {/* <li className='nav-admins'><Link href="/admin">Admin</Link></li> */}

                <li className='nav-mujer'><Link href="/productos/genero/mujer">Mujer</Link></li>
                <li className='nav-hombre'><Link href="/productos/genero/hombre">Hombre</Link></li>
                <li className='nav-hombre'><Link href="/productos/tipo/faldas">Zapatos</Link></li>
                {/* <li className='nav-admin'><Link href="/productos/tipo/pantalon">Pantalones</Link></li>
                <li className='nav-admin'><Link href="/productos/tipo/franela">Franelas</Link></li> */}
                
               {/* hola */}

            </ul>

          
              <InputNav />
          </section>
        

        </nav>
      
    </>
  )
}

