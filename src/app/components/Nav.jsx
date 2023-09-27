import Image from "next/image";
import Link from "next/link";
import {IoCartOutline, IoCartSharp} from "react-icons/io5"
import {AiOutlineMan, AiOutlineWoman} from 'react-icons/ai'
import {BiMenu, BiUser} from 'react-icons/bi'
import {LiaSearchSolid} from 'react-icons/lia'
import {BsInstagram} from 'react-icons/bs'
import { signOut } from "next-auth/react";
import { Button } from "@nextui-org/button";
import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import {CartIcon} from "./icon/cartIcon";
import InputNav from './InputNav'

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
                src='logo3.svg'
                width={140}
                height={140}
                // alt={user?.name ?? "Profile Pic"}
                priority={true}
                
                />
            
            </Link>

                
                {/* <Link href="/api/auth/signout">Cerrar sesion</Link> */}
                {/* <Button onClick={signOut}/> */}
                {/* <Link href="/login">Iniciar sesion</Link>
                <Link href="/registro">Registro</Link> */}
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
                    {children}
                    <Link href={`/carrito`}><CartIcon size={50}/></Link>
                  
                  </div>
                  // ? <Link href="/api/auth/signout">Cerrar sesion</Link> 
                  : <div className="flex items-center gap-1"> 
                      <Link href="/login">Iniciar sesion</Link>
                      <Link href="/registro">Registro</Link>
                      <Link href={`/carrito`}><CartIcon size={50} /></Link>
                    </div>

                }
                
          </section>

          <section className='nav-bottom'>

            <ul className="navbar">
              
                <li className='nav-admins'><Link href="/admin">Admin</Link></li>

                <li className='nav-mujer'><Link href="/productos/genero/mujer">Mujer</Link></li>
                <li className='nav-hombre'><Link href="/productos/genero/hombre">Hombre</Link></li>
                <li className='nav-admin'><Link href="/productos/tipo/faldas">Faldas</Link></li>
                <li className='nav-admin'><Link href="/productos/tipo/pantalon">Pantalones</Link></li>
                <li className='nav-admin'><Link href="/productos/tipo/franela">Franelas</Link></li>
                
                {/* {auth.user ? <button className='logout' onClick={signOut}>Salir de sesion</button> : <li><Link className='login-button' to={"/inicio"}>Login</Link></li>}
                {!auth.user && <li><Link className='login-button' to={"/register"}>Registro</Link></li>} */}

            </ul>

            {/* <div className='nav-link-search'>
                  <div className="search-nav">
                    <form style={{paddingBottom: '0'}} name="search search-relative" className=" search-relative-nav">
                        <input type="text" className="input-search-nav " name="txt"  />
                       
                        <LiaSearchSolid fontSize={25} style={{top:'50%'}}className="search-button-nav" />
                    </form>
                  </div>
              </div> */}
              <InputNav />
          </section>
        

        </nav>
      
    </>
  )
}

