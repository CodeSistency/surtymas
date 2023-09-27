import { Button } from "@nextui-org/button";
import axios from "../../../api/axios"
import CardItem from './CardItem'
import ButtonCta from "./Button";


async function getProducts(){
    let isMounted = true;
    const controller = new AbortController();

    try {
        const response = await axios.get(`/productos/limited`, {
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

// async function getProducts(){
//     const res = await fetch('https://backend-5m1g.onrender.com/productos/limited')

//     return res.json()
// }

export default async function Cards() {

    const products = await getProducts()
    // console.log(products);
  return (
    <>
    <div className="flex gap-2 items-center min-h-45 px-4 py-8">

        {products?.map((product) =>{
            // <Card product={product}/>
            return (

                <CardItem product={product}>
                    <ButtonCta product={[product]}/>
                    
                </CardItem>
            )
        })}

        </div>
    </>
  )
}

