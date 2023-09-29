import React from 'react'
import {Avatar} from "@nextui-org/avatar"
import Link from 'next/link'

function Categories() {
  return (
    <div>
        <h1 style={{fontSize: '24px'}} className='text-center text-black'>Categorias</h1>
        <div className='flex flex-col gap-10 w-full'>
            <div className="category-foto-container">
                <Link href='/productos/tipo/pantalon' className='foto-category w-[30px]'><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="pantalon.jpg" /><p>Pantalon</p></Link>
                <Link href='/productos/tipo/crop-top' className='foto-category w-[30px]'><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="crop-top.jpg" /><p>Crop Top</p></Link>
                <Link href='/productos/tipo/pijama' className='foto-category w-[30px]'><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="pijama.jpg" /><p>Pijama</p></Link>
                <Link href='/productos/tipo/falda' className='foto-category w-[30px]'><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="falda.jpg" /><p>Falda</p></Link>
                <Link href='/productos/tipo/vestido' className='foto-category w-[30px]'><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="vestido.jpg" /><p>Vestido</p></Link>

            </div>
            <div className="category-foto-container">
            <Link href='/productos/tipo/playa' className='foto-category w-[30px]'><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="playa.jpg" /><p>Playa</p></Link>
            <Link href='/productos/tipo/sueter' className='foto-category w-[30px]'><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="sueter.jpg" /><p>Sueter</p></Link>
            <Link href='/productos/tipo/short' className='foto-category w-[30px]'><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="short-mujer.jpg" /><p>Short</p></Link>
            <Link href='/productos/tipo/mono' className='foto-category w-[30px]'><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="mono-mujer.jpg" /><p>Mono</p></Link>
            <Link href='/productos/tipo/liquidacion' className='foto-category w-[30px]'><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="model.jpg" /><p>Liquidacion</p></Link>
            
            </div>
        </div>
    </div>
  )
}

export default Categories