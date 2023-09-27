// import Image from 'next/image'
import {Image} from "@nextui-org/image"
import Link from 'next/link'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'



export default function Hero() {

    // const [emblaRef] = useEmblaCarousel()

  return (
    // <div className="embla" ref={emblaRef}>
    <div className="embla" >
                    <div className="embla__container">
                        <div className="embla__slide image-container">
                            <img
                            src="/bg.jpg" 
                            // className="hero"
                            
                            className="object-cover h-full w-full hero"
                         
                            />
                                <h1>Bienvenido</h1>
                                <Link href='/productos' className="content">Productos</Link>
                            
                        </div>
                       {/* <div className="embla__slide image-container-2">
                            <Image 
                            src="/model.jpg" 
                            className="hero"
                            
                            
                            />
                                <div>

                                    <h1>Compra desde 12 piezas</h1>
                                     <h4>Y llevate lo mejor de lo mejor</h4>
                                    <Link href='/productos' style={{color: 'white'}} className="btn-sale">Compra ya</Link>
                                </div>
                                
                            
                        </div>
                        
                        <div style={{backgroundColor: 'white'}} className="embla__slide image-container-3">
                            <Image 
                            src="/mujer-senalando.jpg" 
                            className="hero2"
                            width={1000}
                            height={1000}
                            priority={true}
                            />
                                <div>

                                    <h3>DESCUENTOS EN</h3>
                                    <h1>DESCUENTOS</h1>
                                    <Link href='/productos' style={{color: 'white'}} className="btn-sale">Empieza ya</Link>
                                </div>
                                
                            
                        </div> */}
                    </div>
                </div>
  )
}

