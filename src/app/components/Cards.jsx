
import axios from "../../../api/axios"
import CardItem from './CardItem'
import ButtonCta from "./Button";
import Button3 from "./Button3";
import Cart from './Cart'
import { getServerSession } from "next-auth/next"
import { options } from "../api/auth/[...nextauth]/options"


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

    const session = await getServerSession(options)

    const products = await getProducts()
    // console.log(products);
  return (
    <>
    <div className="flex gap-2 items-center min-h-45 px-4 py-8 card-container">
    {
        products && 

        products?.map((product) =>{
            // <Card product={product}/>
            return (

                <CardItem key={product._id} product={product}>
                    <ButtonCta user={session?.user?.name} product={[product]}/>
                    {/* <Cart user={session?.user?.name} product={[product]}/> */}
                    <Button3 user={session?.user?.name} product={[product]}/>
                    
                </CardItem>
            )
        })
    }
        

        </div>
    </>
  )
}

