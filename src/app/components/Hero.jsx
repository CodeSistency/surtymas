// import Image from 'next/image'
import {Image} from "@nextui-org/image"
import Link from 'next/link'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import CarouselHero from './CarouselHero'



export default function Hero() {

    // const [emblaRef] = useEmblaCarousel()

  return (

    // <div className="embla" ref={emblaRef}>
                <div style={{height: '70vh', padding: "3px"}}>
                    <CarouselHero />
                </div>

    // <div className="embla" >
    //                 <div className="embla__container">
    //                     <div className="embla__slide image-container">
    //                         <img
    //                         src="/bg.jpg" 
                            
                            
    //                         className="object-cover h-full w-full hero"
                         
    //                         />
    //                             <h1>Bienvenido</h1>
    //                             <Link href='/productos' className="content">Productos</Link>
                            
    //                     </div>


    //                 </div>
    //             </div>
  )
}

