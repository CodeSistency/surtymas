import React from 'react'
import CardItem3 from './CardItem3';
import axios from '../../../api/axios';
import {Pagination} from "@nextui-org/pagination";



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

    const products = await getProducts()
    // console.log('item2', products)

  return (
    <>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 py-8">
      {products?.map((product) =>{
      
            return (

                <CardItem3 key={product._id} product={product}/>
            )
        })}
    
</div>
<div className='flex justify-center w-full'>
    <Pagination isCompact showControls total={10} initialPage={1} />
</div>
</>

  )
}

export default Tipo