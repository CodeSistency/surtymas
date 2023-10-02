import React from 'react'
import {Avatar} from "@nextui-org/avatar"
import Link from 'next/link'

function Categories2() {
  return (
    <div>
     
        <div >
            <div className='w-full card-container'>
                <Link href='/productos/tipo/pantalon' className='foto-category'><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="pantalon.jpg" /><p>Pantalon</p></Link>
                <Link href='/productos/tipo/crop-top' className='foto-category'><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="crop-top.jpg" /><p>Crop Top</p></Link>
                <Link href='/productos/tipo/pijama' className='foto-category'><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="pijama.jpg" /><p>Pijama</p></Link>
                <Link href='/productos/tipo/falda' className='foto-category'><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="falda.jpg" /><p>Falda</p></Link>
                <Link href='/productos/tipo/vestido' className='foto-category'><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="vestido.jpg" /><p>Vestido</p></Link>
                <Link href='/productos/tipo/playa' className='foto-category'><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="playa.jpg" /><p>Playa</p></Link>
            <Link href='/productos/tipo/sueter' className='foto-category'><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="sueter.jpg" /><p>Sueter</p></Link>
            <Link href='/productos/tipo/short' className='foto-category'><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="short-mujer.jpg" /><p>Short</p></Link>
            <Link href='/productos/tipo/mono' className='foto-category'><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="mono-mujer.jpg" /><p>Mono</p></Link>
            <Link href='/productos/tipo/liquidacion' className='foto-category'><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="model.jpg" /><p>Liquidacion</p></Link>
            </div>
          
            
            
        </div>
    </div>
  )
}

export default Categories2