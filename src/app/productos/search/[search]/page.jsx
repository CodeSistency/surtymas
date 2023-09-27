import React from 'react'
import axios from '../../../../../api/axios';
import CardItem3 from '../../../components/CardItem3';
import ButtonCta from '../../../components/Button';

async function page({params}) {
    console.log(params)

    async function getProducts(){
        let isMounted = true;
        const controller = new AbortController();
    
        try {
            const response = await axios.get(`/productos/search/${params.search}`, {
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

    const products = await getProducts()
    console.log('search', products)

  return (
    <div  class="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 py-8">

        {products.length ?
            products?.map((product) =>{
    
                return (
      
                    <CardItem3 key={product._id} product={product}>
                        <ButtonCta product={[product]}/>
                    </CardItem3>
                )
            })

            :

            <p>No hay productos</p>
        }
    
  
</div>
  )
}

export default page