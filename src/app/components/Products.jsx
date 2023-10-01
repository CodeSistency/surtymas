import React from 'react'
import CardItem3 from './CardItem3';
import axios from '../../../api/axios';
import {Pagination} from "@nextui-org/pagination";
import ButtonCta from './Button';
import Button3 from './Button3';
import { getServerSession } from "next-auth/next"
import { options } from "../api/auth/[...nextauth]/options"
import { Button } from "@nextui-org/button";




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
    <div  className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 py-8">
      {products?.map((product) =>{
      
            return (

                <CardItem3 key={product._id} product={product}>
                      <ButtonCta user={session?.user} product={[product]}/>
{/*                     
                    {session ? <Button3 user={session?.user?.name} product={[product]}/> 
                    :  <Link href='/login'><Button radius="full" color="primary"  className="w-full  self-end justify-self-end  text-white shadow-lg">Carrito</Button></Link> 
                    } */}
                </CardItem3>
            )
        })}
    
</div>
{/* <div className='flex justify-center w-full'>
    <Pagination isCompact showControls total={10} initialPage={1} />
</div> */}
</>

  )
}

export default Productos