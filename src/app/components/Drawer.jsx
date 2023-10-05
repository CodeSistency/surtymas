'use client'
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import { CartIcon } from './icon/cartIcon';
import ListItem from './ListItem';
import ModalBuy from './ModalBuy';
import DeleteCart from './DeleteCart';
import ReactWhatsapp from 'react-whatsapp';
import ButtonCartBuy from './ButtonCartBuy';

function Drawer() {

    const {carrito, color, results, setCarrito, setResults, setColor, isOpen, handleToggle} = useGlobalContext();
    console.log(useGlobalContext(), color)

    const [total, setTotal] = useState()

    useEffect(() => {

        setTotal(carrito.reduce((totalSum, sum) => totalSum = totalSum + sum.precio, 0).toFixed(2))
      }, [carrito])

  // useEffect(() => {
  //   console.log(carrito)
  // }, [carrito])

  return (
    <div>
        <div className={`drawer ${isOpen ? 'open' : ''}`}>
        {/* <div className="overlay-drawer" onClick={handleToggle}></div> */}
        <button className="toggle-button z-20" onClick={handleToggle}>
            Cerrar
        </button>
        
        <hr />
        <div className="content-drawer">
            {/* <h2>Articulos</h2> */}

            <div className='cart-container'>
    <div  className='cart-icon-container'>
        <img src='/shopping.png' alt="cart"/>

        
    </div>
    <div className="cart-products mt-7">

        {!carrito && <h2>No hay articulos</h2>}

    {carrito?.map(product => {
        return (
            <div  key={product._id} className='py-1'>
                <ListItem  product={product}>
                    <ModalBuy  producto={[product]} />
                    <DeleteCart product={product}/>
                </ListItem>
            </div>
        )
    })} 
    </div>

    <div className='total'>
                          <div className='subtotal'>
                            <div className='result-total'>
                              <h2>Subtotal:</h2>
                              <h1>{total} $</h1>
                            </div>
                            <ButtonCartBuy product={carrito}r/>
{/* 
                            <ReactWhatsapp
  number="+58 4124668486"
  message={`¡Hola! 👋 ¡Bienvenido a Surtymas! 

  Mi compra es la siguiente:
  
  ${carrito
    ?.map((product) => {
      let message = `"${product.titulo}". Precio: $${product.precio}, Precio al mayor: $${product.precio_mayor}, Codigo: ${product.codigo}`;
      if (product.tallas) {
        const tallasMessage = Object.entries(product.tallas)
          .map(([size, colors]) => {
            const deseos = colors.filter((color) => color.deseo > 0);
            if (deseos.length > 0) {
              const deseosMessage = deseos
                .map((color) => `${size}: ${color.deseo}`)
                .join(", ");
              return deseosMessage;
            }
            return null;
          })
          .filter((message) => message !== null)
          .join("\n");
        if (tallasMessage !== "") {
          message += `\nTallas: \n${tallasMessage} piezas\n`;
        }
      }
      return message;
    })
    .join("\n")}
  
  Nuestro equipo te atenderá pronto. ¡Gracias! 🛍️`}
>
  Comprar
</ReactWhatsapp> */}
                            
                        {/* <ReactWhatsapp
                      
                       number='+58 4124668486'
                       message={`¡Hola! 👋 ¡Bienvenido a Surtymas! 

Mi compra es la siguiente:
                       
${carrito?.map((product) => {
                         let message = `"${product.titulo}". Precio: $${product.precio}, Precio al mayor: $${product.precio_mayor}, Codigo: ${product.codigo}`;
                         if (product.tallas) {
                           const tallasMessage = Object.entries(product.tallas)
                             .map(([size, colors]) => {
                               const deseos = colors.filter((color) => color.deseo !== 0);
                               if (deseos.length > 0) {
                                 const deseosMessage = deseos
                                   .map((color) => `${size}: ${color.deseo || 'No seleccionado'}`)
                                   // .join(", ");
                                 return deseosMessage;
                               }
                               return null;
                             })
                             .filter((message) => message !== null)
                             .join("\n");
                           if (tallasMessage !== "") {
                             message += `\nTallas: \n${tallasMessage} piezas\n`;
                           }
                         }
                         return message;
                       })}
Nuestro equipo te atenderá pronto. ¡Gracias! 🛍️`}

                    >Comprar</ReactWhatsapp> */}

                          </div>
                          </div>
    </div>
        </div>
        </div>

        <CartIcon  onClick={handleToggle} size={50}/>
    </div>
  )
}

export default Drawer