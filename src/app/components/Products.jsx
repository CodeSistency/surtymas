import React from 'react'
import CardItem3 from './CardItem3';
import axios from '../../../axio/axios';
import {Pagination} from "@nextui-org/pagination";
import ButtonCta from './Button';
import Button3 from './Button3';
import { getServerSession } from "next-auth/next"
import { options } from "../api/auth/[...nextauth]/options"
import { Button } from "@nextui-org/button";
import ButtonCart2 from './ButtonCart2';
import ButtonCartAdd from './ButtonCartAdd';
import NoProduct from './NoProduct';




// async function Productos({pageNumber}) {

//     async function getProducts(){
//         let isMounted = true;
//         const controller = new AbortController();
    
//         try {
//             const response = await axios.get(`/productos/some?pageNumber=${pageNumber}`, {
//                 signal: controller.signal
//             });
//             // console.log(response.data);
//             return response.data
          
//         } catch (err) {
//             console.error(err);
            
//         }
    
//         return () => {
//             isMounted = false;
//             controller.abort();
//         }
    
        
    
//     }

async function Productos({pageNumber}) {

    async function getProducts(){
        let isMounted = true;
        const controller = new AbortController();
    
        try {
            const response = await axios.get(`/productos`, {
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

    const products = await getProducts()
    // console.log('item2', products)

  return (
    <>
  {products ?  <div  className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 py-8">

    {/* {!products?.length && <NoProduct/>} */}

      {products?.map((product) =>{
      
            return (

                <CardItem3 key={product._id} product={product}>
                      <ButtonCta user={session?.user} product={[product]}/>


                    <ButtonCartAdd  user={session?.user?.name} product={product}/>

                </CardItem3>
            )
        })}

{products.map((product, i) =>
  Object.entries(product?.tallas).map(([size, colors]) =>
    colors.map((color, j) => 
    color.quantity > 0 && 
    <li>
           <QRcode id={product?.codigo} />
           <p style={{ marginTop: '-5px', fontSize: '8px', maxWidth: '130px'}}>{`${product.titulo}-${size}-${color.color_seleccionado}-${product.codigo}`}
           </p>              
         </li>
      
    )
  )
)}
    
</div> :

<div className='h-[70vh] flex items-center justify-center'>
    <h2>Cargando...</h2>
</div>

}
{/* <div className='flex justify-center w-full'>
    <Pagination isCompact showControls total={10} initialPage={1} />
</div> */}
</>

  )
}

export default Productos