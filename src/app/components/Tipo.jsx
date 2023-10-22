import React from 'react'
import CardItem3 from './CardItem3';
import axios from '../../../axio/axios';
import {Pagination} from "@nextui-org/pagination";
import { getServerSession } from "next-auth/next"
import { options } from "../api/auth/[...nextauth]/options"
import ButtonCta from './Button';
import ButtonCart2 from './ButtonCart2'
import ButtonCartAdd from './ButtonCartAdd';
import NoProduct from './NoProduct';




async function Tipo({params}) {

    console.log(params)

    async function getProducts(pageNumber){
        let isMounted = true;
        const controller = new AbortController();
    
        try {
            const response = await axios.get(`/productos/tipo/${params.tipo}`, {
                signal: controller.signal
            });
            // console.log(response.data);
            return response.data
          
        } catch (err) {
            console.error(err);
            
        }
    
        return () => {
            isMounted = false;
            controller.abort();
        }
    
        
    
    }

    const session = await getServerSession(options)
    console.log(`session cart:  ${session}`)

    let products = null
    products = await getProducts()
    // console.log('item2', products)

  return (
    <>
     {products ? (
        products.length === 0 ? (
          <NoProduct />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 py-8">
            {products.map((product) => (
              <CardItem3 key={product._id} product={product}>
                <ButtonCta user={session?.user} product={[product]} />
                <ButtonCartAdd user={session?.user?.name} product={product} />
              </CardItem3>
            ))}
          </div>
        )
      ) : (
        <div className='h-[70vh] flex items-center justify-center'>
          <h2>Cargando...</h2>
        </div>
      )}
{/*   
   {products ? <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 py-8">

    
      {products?.map((product) =>{
      
            return (

                <CardItem3 key={product._id} product={product}>
                    <ButtonCta user={session?.user} product={[product]}/>
                
                    <ButtonCartAdd  user={session?.user?.name} product={product}/>

                </CardItem3>
            )
        })}
    
</div> : 

<div className='h-[70vh] flex items-center justify-center'>
    <h2>Cargando...</h2>
</div>} */}

</>

  )
}

export default Tipo