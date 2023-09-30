import React from 'react'
import axios from '../../../../api/axios';
import ButtonCta from '@/app/components/Button';
import { options } from "../../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import CommentForm from '@/app/components/CommentForm'
import moment from 'moment';
import ModalBuy from '../../components/ModalBuy';

async function page({params}) {

    

    console.log(params)

    async function getProduct(){
        let isMounted = true;
        const controller = new AbortController();
    
        try {
            const response = await axios.get(`/productos/${params.id}`, {
                signal: controller.signal
            });
            // console.log(response.data);
            return response.data
          
        } catch (err) {
            console.log(err);
            
        }
    
        return () => {
            isMounted = false;
            controller.abort();
        }

    }

    

    const product = await getProduct()
    console.log(product)

    const session = await getServerSession(options)

  return (
    <section  className="bg-white dark:bg-gray-900">
    {/* <div className=" gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"> */}
    <div className=" gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:flex  sm:py-16 lg:px-6">
   
        <img className="w-full sm:max-h-[400px] flex-1 lg:h-full dark:hidden" src={product.imagenes[0]} alt="dashboard image"/>
        {/* <img className="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image"/> */}
        <div className="mt-4 md:mt-0 flex-1">
          
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{product.titulo}</h2>
           {/*    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p> */}
            <hr style={{marginTop: '-10px', marginBottom: '5px'}}/>
<div className='precios'>
              <p style={{color: 'rgb(184, 11, 69)'}} className="producto precio dollars font-extrabold  text-black">{`${product?.precio_mayor}`}<span className='dolar'>$</span></p>
              <p className="producto precio-mayor dollars text-black"><strong>Mayor</strong> {`${product?.precio_mayor}`} <span className='dolar'>$</span></p>
              </div>

              <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400"><strong className='font-extrabold text-gray-900'>Descripcion:</strong> {product?.descripcion}</p>
            {/* <a href="#" className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Comprar
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a> */}



             
            <ModalBuy producto={[product]}/>
        </div>
    </div>

   

</section>
  )
}

export default page