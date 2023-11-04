// import { options } from "../api/auth/[...nextauth]/options"
import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
// import UserCard from "../components/UserCard"
import { redirect } from "next/navigation"
import axios from "../../../axio/axios"
import ListItem from "../components/ListItem"
import ModalBuy from '../components/ModalBuy'
import Comprar from "../components/Comprar"
import ButtonCta from "../components/Button";
import ButtonCta2 from "../components/Button2";
import ListItemsCart from "../components/ListItemsCart"
import ButtonCartBuy from '../components/ButtonCartBuy';
import ButtonCartBuy2 from '../components/ButtonCartBuy2';



async function getProducts(pageNumber){

    const session = await getServerSession(options)
    // console.log(session)

    let isMounted = true;
    const controller = new AbortController();

    try {
        const response = await axios.get(`/cart/${session?.user?.name}`, {
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


async function page() {

    const session = await getServerSession(options)
    // console.log(session)

    const products = await getProducts()
    console.log(products)

   function total() {
    let totalPrice = products?.cartProducts?.reduce((totalSum, sum) => totalSum = totalSum + sum.precio, 0).toFixed(2)
    return totalPrice
   }

    if (!session) {
        redirect('/login')
    }

  return (
    <>
    <div className='cart-container'>
    <div  className='cart-icon-container'>
        <img src='/shopping.png' alt="cart"/>

        
    </div>
    <div className="cart-products mt-7">

    {/* {products?.cartProducts?.map(product => {
        return (
            <div  key={product._id} className='py-1'>
                <ListItem  product={product}>
                    <ModalBuy product={product} />
                </ListItem>
            </div>
        )
    })} */}
    <ListItemsCart />
    </div>

    <div className='total'>
                          <div className='subtotal'>
                            <div className='result-total'>
                              <h2>Subtotal: {total()}</h2>
                              {/* <h1>0 $</h1> */}
                            </div>
                            <ButtonCartAddList />
                            <ButtonCartBuy2 product={products?.cartProducts}/>
                            {/* <button className="buy-total" >
                                Comprar
                              </button> */}
                              {/* <Comprar products={products.cartProducts}>
                                <ButtonCta2 products={products.cartProducts}/>
                              </Comprar> */}
                                
                              
                              {/* <ReactWhatsapp 
                            className='buy-total' 
                            number='+58 4121940547'
                            message={`¡Hola! 👋 ¡Bienvenido a Surtymas! Agradecemos tu interés en nuestros productos. Aquí está la lista de lo que pediste:
${cart.map(product => (
  `"${product.titulo}". Precio: $${product.precio}\n`
))}
Nuestro equipo te atenderá pronto. ¡Gracias! 🛍️`}

                            >Comprar</ReactWhatsapp> */}
                          </div>
                          </div>
    </div>
    </>
  )
}

export default page