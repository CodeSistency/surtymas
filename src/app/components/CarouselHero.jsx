'use client';

import { Button } from '@nextui-org/button';
import { Carousel } from 'flowbite-react';
import Link from 'next/link';
import ReactWhatsapp from 'react-whatsapp';

export default function CarouselHero() {
  return (
    <Carousel pauseOnHover>

<section style={{
    width: '100%',
    height: "100%",
    
    background: 'radial-gradient(circle, #ff2b88 50%, #f7a618 )',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',}}
 class=" h-full flex flex-col justify-center">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Bienvenido a Surtymas!</h1>
            <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white">Tú pagina oficial para emprender o llevar tu negocio al siguiente nivel. Tenemos ventas al mayor y al detal desde la comodidad de tú movil o PC.</p>
            {/* <Link href="/productos" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Productos
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link> */}
            
        </div>
        <div class=" lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/phone.png" alt="mockup" />
        </div>                
    </div>
</section>

<section style={{
    width: '100%',
    height: "100%",
    
    background: 'radial-gradient(circle, #ff2b88 50%, #f7a618 )',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',}}
 class=" h-full flex flex-col justify-center">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Ropa femenina marca SHEIN, al mayor y al detal.</h1>
        <img className='w-[120px] h-[90px]' src="/speaker.png" alt="mockup" />
            {/* <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white">Ropa femenina marca SHEIN, al mayor y al detal.</p> */}
        {/* <div class=" lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/shein.png" alt="mockup" />
        </div>          */}
            
        </div>
        <div class=" lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/speaker.png" alt="mockup" />
        </div>                
    </div>
</section>

<section style={{
    width: '100%',
    height: "100%",
    
    background: 'radial-gradient(circle, #ff2b88 50%, #f7a618 )',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',}}
 class=" h-full flex flex-col justify-center">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">CAJA GRAN MAYOR</h1>
            <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white">Elige 72 piezas de acuerdo a los modelos y talla que necesitas</p>
            {/* <Link href="/productos" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Productos
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link> */}
            {/* <ReactWhatsapp number="+58 4124668486"
  message={`¡Hola! 👋, Estoy interesad@ en la caja gran mayor`}
  class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 "
  >
Pídelo Ya!
  </ReactWhatsapp> */}
        </div>
        <div class=" lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/1.png" alt="mockup" />
        </div>                
    </div>
</section>

<section style={{
    width: '100%',
    height: "100%",
    
    background: 'radial-gradient(circle, #ff2b88 50%, #f7a618 )',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',}}
 class=" h-full flex flex-col justify-center">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">CAJA PREMIUM</h1>
            <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white">Selecciona 24 piezas de acuerdo a los modelos y talla que necesitas</p>
            <p className='mt-2'>¡Bienvenido al lugar ideal para llenar esta cajita!</p>

            {/* <Link href="/productos" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Productos
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link> */}
            {/* <ReactWhatsapp number="+58 4124668486"
  message={`¡Hola! 👋, Estoy interesad@ en la caja premium`}
  class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 "
  >Pídelo Ya!</ReactWhatsapp> */}
        </div>
        <div class=" lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/2.png" alt="mockup" />
        </div>                
    </div>
</section>

<section style={{
    width: '100%',
    height: "100%",
    
    background: 'radial-gradient(circle, #ff2b88 50%, #f7a618 )',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',}}
 class=" h-full flex flex-col justify-center">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">CAJA SURTYMAS</h1>
            <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white">Elige 12 piezas de acuerdo a los modelos y talla que necesitas</p>
            <p className='mt-2'>¡Bienvenido al lugar ideal para llenar esta cajita!</p>
            {/* <Link href="/productos" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Productos
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link> */}
            {/* <ReactWhatsapp number="+58 4124668486"
  message={`¡Hola! 👋, Estoy interesad@ en la caja surtymas`}
  class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 "
  >Pídelo Ya!</ReactWhatsapp> */}
        </div>
        <div class=" lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/3.png" alt="mockup" />
        </div>                
    </div>
</section>

<section style={{
    width: '100%',
    height: "100%",
    
    background: 'radial-gradient(circle, #ff2b88 50%, #f7a618 )',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',}}
 class=" h-full flex flex-col justify-center">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">CAJA SURTIDA PARA EMPRENDEDORES</h1>
            <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white">!Llevate 12 piezas de diferentes tallas y modelos! Ya estan listas para partir, pero si quieres ver su contenido, pide los videos y echa un vistazo.</p>
            {/* <Link href="/productos" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Productos
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link> */}
            <ReactWhatsapp number="+58 4124668486"
  message={`¡Hola! 👋, Estoy interesad@ en la caja para emprendedores`}
  class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 "
  >Pídelo Ya!</ReactWhatsapp>
        </div>
        <div class=" lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/4.png" alt="mockup" />
        </div>                
    </div>
</section>


<section style={{
    width: '100%',
    height: "100%",
    
    background: 'radial-gradient(circle, #ff2b88 50%, #f7a618 )',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',}}
 class=" h-full flex flex-col justify-center">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">CAJAS EN OFERTA</h1>
            <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white">Elige tus 6 modelos favoritos de nuestra seleccion especial</p>
            {/* <Link href="/productos" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Productos
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link> */}
            <ReactWhatsapp number="+58 4124668486"
  message={`¡Hola! 👋, Estoy interesad@ en las cajas en oferta`}
  class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 "
  >Pídelo Ya!</ReactWhatsapp>
        </div>
        <div class=" lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/5.png" alt="mockup" />
        </div>                
    </div>
</section>


<section style={{
    width: '100%',
    height: "100%",
    
    background: 'radial-gradient(circle, #ff2b88 50%, #f7a618 )',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',}}
 class=" h-full flex flex-col justify-center">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Ventas al detal</h1>
            <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white">Los precios están colocados en cada productos</p>
            {/* <Link href="/productos" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Productos
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link> */}
          
        </div>
        <div class=" lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/pro.png" alt="mockup" />
        </div>                
    </div>
</section>

                

    </Carousel>
  )
}


