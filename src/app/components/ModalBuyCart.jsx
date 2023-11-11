'use client'
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/modal";
import {useDisclosure} from "@nextui-org/use-disclosure";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/dropdown";
import {Select, SelectItem} from "@nextui-org/select";
import {Avatar} from "@nextui-org/avatar";
import {Divider} from "@nextui-org/divider";
import {RadioGroup, Radio} from "@nextui-org/radio";
import useInput from '../../../hooks/useInput'
import useToggle from '../../../hooks/useToggle'
import ListItem from './ListItem'
import ReactWhatsapp from 'react-whatsapp';
import HowtoPay from './HowToPay'


import React, { useState, useMemo, useEffect } from "react";
import CartDrawer from "./CartDrawer";
import { Image } from "@nextui-org/image";
import axios from "../../../axio/axios";
import { useGlobalContext } from '../context/GlobalContext'

function ModalBuyCart({id, user, cart, productos, producto}) {

  
    // console.log(producto)
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [scrollBehavior, setScrollBehavior] = useState("inside");

    const [abierto, setAbierto] = useState(false)

    const [quantityChangesModal, setQuantityChangesModal] = useState({});
  // const [results, setResults] = useState()

  const [product, setProducto] = useState()

  const {carrito, setCarrito, handleToggle, results, setResults} = useGlobalContext();


  function open() {
    setAbierto(prev => !prev)
    console.log(abierto)
  }

  // setResults(producto)

  async function getProduct(){
    let isMounted = true;
    const controller = new AbortController();

    try {
        const response = await axios.get(`/productos/${id}`, {
            signal: controller.signal
        });
        // console.log(response.data);
        setProducto([response.data])
        return response.data
      
    } catch (err) {
        console.log(err);
        
    }

    return () => {
        isMounted = false;
        controller.abort();
    }

    
}

useEffect(() =>{
  getProduct()
  // console.log(product)
}, [id])

useEffect(() =>{
  // getProduct()
  console.log(product)
}, [product])


const handleCart = async (username, nombre, precio, precio_mayor, imagen, id, codigo, tallas, tallas_zapatos) => {

  // console.log(username, nombre, precio, precio_mayor)
let isMounted = true;
  const controller = new AbortController();
  const quantity = 0

  console.log(username, nombre, precio, precio_mayor, codigo)


    try {
        const response = await axios.put('cart', { username, nombre, precio, precio_mayor, quantity, imagen, id, codigo, tallas, tallas_zapatos},
      //   JSON.stringify({username, nombre, precio, precio_mayor, quantity}),
        { 
            signal: controller.signal,
            
        });
        console.log(JSON.stringify(response?.data));
      //   isMounted && setCart(response.data);
        
    } catch (err) {
        console.error(err);

    }

    return () => {
        isMounted = false;
        controller.abort();
    }

  
}




  
  const onChangeModal = (size, index, value) => {

    // applyChangesModal()
    const changeKey = `${producto[0].codigo}-${size}-${index}`;
    setQuantityChangesModal((prevChanges) => ({
      ...prevChanges,
      [changeKey]: parseInt(value, 10),
    }));
    console.log(changeKey)
    console.log(quantityChangesModal)
    
  };

  function totalItems(){
    let total = 0
    
    const items = producto.map(product => {
      let total = 0
      Object.entries(product.tallas).map(([size, colors]) =>
      colors.map((color, index) =>{
      console.log(total, color)
    })
    )
    return total
    })
    
  }

  // const onChange = (productCode, size, index, value) => {
    
    
  //     let total = 0
  //     const intValue = parseInt(value, 10);
      
  //       const updatedResults = producto?.map((product) => {
  //         if (producto[0].codigo === productCode) {
  //           const colors = producto[0].tallas[size];
  //           if (!colors || index >= colors.length) return product;
    
  //           if (!isNaN(intValue)) {
  //             // If the input is a number, update the sold property
  //             const newSoldValue = Math.max(0, intValue);
  //             const quantityChange = newSoldValue - (colors[index].deseo || 0); // Calculate the change in sold quantity
  //             colors[index].deseo = intValue;
  //             colors[index].quantity -= quantityChange; // Decrease the quantity
  //           }

  //           let total = 0;
  //           Object.entries(product.tallas).forEach(([size, colors]) => {
  //             colors.forEach((color) => {
  //               total += color.deseo || 0;
  //             });
  //           });
      
  //           return {
  //             ...product,
  //             total,
  //           };

  //         }
  //         // setResults(updatedResults)
  //         // console.log(results)
  //         return product;

          
  //       });

     

  //       setResults(updatedResults)
  //       // setCarrito(prev => [...prev, ...updatedResults])
  //       setCarrito(updatedResults)
  //       console.log(updatedResults)
  //       return updatedResults;
    
  

  //   // console.log(updatedResults)
  // };

  const onChange = (productCode, size, index, value) => {
    const intValue = parseInt(value, 10);
    let productos = [producto]
  
    const updatedResults = productos?.map((product) => {
      if (product.codigo === productCode) {
        const colors = product.tallas[size];
        if (!colors || index >= colors.length) return product;
  
        if (!isNaN(intValue)) {
          const newSoldValue = Math.max(0, intValue);
          const quantityChange = newSoldValue - (colors[index].deseo || 0);
          colors[index].deseo = intValue;
          colors[index].quantity -= quantityChange;
        }
  
        let total = 0;
        Object.entries(product.tallas).forEach(([size, colors]) => {
          colors.forEach((color) => {
            total += color.deseo || 0;
          });
        });
  
        return {
          ...product,
          total,
        };
      }
  
      return product;
    });
  
    setResults(updatedResults);
    console.log(updatedResults);
  
    // Now, check if the product is already in the cart
    const isProductInCart = carrito.some((item) => item.codigo === productCode);
  
    if (!isProductInCart) {
      // If the product is not in the cart, add it
      setCarrito([...carrito, ...updatedResults]);
    } else {
      // If the product is already in the cart, update it
      const updatedCart = carrito.map((item) => {
        if (item.codigo === productCode) {
          return updatedResults.find((product) => product.codigo === productCode);
        }
        return item;
      });
      setCarrito(updatedCart);
      console.log(carrito)
    }

    const isProductInResults = results.some((item) => item.codigo === productCode);

    if (!isProductInResults) {
      // If the product is not in the cart, add it
      setResults([...results, ...updatedResults]);
    } else {
      // If the product is already in the cart, update it
      const updatedCart = results.map((item) => {
        if (item.codigo === productCode) {
          return updatedResults.find((product) => product.codigo === productCode);
        }
        return item;
      });
      setResults(updatedCart);
      console.log(results)
    }
  };
  

  // function please(){
  //   carrito
  //   ?.map((product) => {
  //     let message = `"${product.titulo}". Precio: $${product.precio}, Precio al mayor: $${product.precio_mayor}, Codigo: ${product.codigo}`;
  //     if (product.tallas) {
  //       const tallasMessage = Object.entries(product.tallas)
  //         .map(([size, colors]) => {
  //           const deseos = colors.filter((color) => color.deseo > 0);
  //           console.log(deseos)
  //           if (deseos.length > 0) {
  //             console.log(deseos
  //               .map((color) => console.log(color)))
  //             const deseosMessage = deseos
  //               .map((color) => `${size}: ${color.deseo} ${color.color}`)
  //               .join(", ");
  //               console.log(deseosMessage)
  //             return deseosMessage;
  //           }
  //           return null;
  //         })
  //         .filter((message) => message !== null)
  //         .join("\n");
  //       if (tallasMessage !== "") {
  //         message += `\nTallas: \n${tallasMessage} piezas\n`;
  //       }
  //     }
  //     console.log(message)
  //     return message;
  //   })
  //   .join("\n")
  // }

  // console.log(please())

  // console.log(carrito
  //   ?.map((product) => {
  //     let message = `"${product.titulo}". Precio: $${product.precio}, Precio al mayor: $${product.precio_mayor}, Codigo: ${product.codigo}`;
  //     if (product.tallas) {
  //       const tallasMessage = Object.entries(product.tallas)
  //         .map(([size, colors]) => {
  //           const deseos = colors.filter((color) => color.deseo > 0);
  //           if (deseos.length > 0) {
  //             const deseosMessage = deseos
  //               .map((color) => `${size}: ${color.deseo} ${color.color}`)
  //               .join(", ");
  //             return deseosMessage;
  //           }
  //           return null;
  //         })
  //         .filter((message) => message !== null)
  //         .join("\n");
  //       if (tallasMessage !== "") {
  //         message += `\nTallas: \n${tallasMessage} piezas\n`;
  //       }
  //     }
      
  //     return message;
  //   })
  //   .join("\n"))

    



    // useEffect(() =>{

    // //   // applyChangesModal()
    // //   // handleApplyChanges()
    //   setResults(producto)
    // //   console.log('results', results)
      
    // },[])

   

  return (
    <>
     <Image style={{cursor: 'pointer'}} onClick={open} src='/edit1.svg' alt="edit" width={30}/>
     <Modal
     style={{zIndex: '1000'}}
      className='mt-36 z-50'
        isOpen={abierto}
        onOpenChange={onOpenChange}
        scrollBehavior={scrollBehavior}
      >
        <ModalContent>
        {(onClose) => (
            <>
            {producto &&  <ModalHeader className="flex flex-col gap-1" style={{color:'black'}}>
              <div className='modal-info' style={{padding:'10px', border: 'none'}}>
      <img alt="producto" style={{width: '50px', height: '50px'}} src={`${producto && producto.imagen}`}/>
      <p >Producto: {producto?.nombre}</p>
    </div>
              </ModalHeader>}
              {producto &&  <ModalBody>
              <div>

    
<div >
  <div className="modal-content-buy text-black">
    {/* <h3>¿Estás seguro de realizar esta compra?</h3> */}

    {/* <div className='modal-info' style={{margin: '15px 0', border: 'none'}}>
      <img style={{width: '50px', height: '50px'}} src={`${product.imagenes ? product.imagenes[0] : product.imagen}`}/>
      <p >Producto: {product.titulo}{product.nombre}</p>
    </div> */}
    
    <div>
      <div className='modal-tallas'>
    {/* {Object.entries(product.tallas).map(([size, colors]) => 
    colors.map((color, index) => (
           color > 0 && 
           <div key={`${product.codigo}-${size}`} className="size-section">
            <h3>{size}</h3>
                <div className="color-input lista-productos" key={color._id}>
                <div
                    style={{
                        backgroundColor: color.color,
                        borderRadius: "50%",
                        border: "1px solid gray",
                        height: "30px",
                        width: "30px",
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.305)'
                    }}
                    >

                </div>
                </div>
            

          <div className="color-input lista-productos" key={color._id}>
            <div
              style={{
                backgroundColor: color.color,
                borderRadius: "50%",
                border: "1px solid gray",
                height: "30px",
                width: "30px",
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.305)'
              }}
            ></div>
             <input
            style={{width: "70%", color: 'black'}}
              type="number"
              value={quantityChangesModal[`${product.codigo}-${size}-${index}`] || ""}
              onChange={(e) =>
                onChangeModal(size, index, e.target.value)
              }
            /> 
           
          
          </div>
        </div>
        ))
      
    )} */}

{Object.entries(producto?.tallas).map(([size, colors]) =>
  colors.map((color, index) =>
    (color.quantity > 0 || color.deseo > 0) && (
      // ( 
      <div key={`${producto?.codigo}-${size}`} className="size-section">
        <h3>{size}</h3>
        <div className="color-input lista-productos" key={color._id}>
          <div
            style={{
              backgroundColor: color.color,
              borderRadius: "50%",
              border: "1px solid gray",
              height: "30px",
              width: "30px",
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.305)'
            }}
          ></div>
          <div className='flex gap-2 items-center'>
          <Input
            type="number"
            label="Agregue Cantidad"
            style={{ fontSize: '14px', marginTop: '12px', color: 'black' }}
            value={color.deseo || 0}
            onChange={(e) => onChange(producto?.codigo, size, index, e.target.value)}
          />
          {/* {color.quantity === 0 && <p>Ese era el ultimo, no selecciones más</p>}
          {color.quantity < 0 && <p>Ese era el ultimo, no selecciones más</p>} */}
            </div>
        </div>
      </div>
    )
  )
)}

    
    </div>
    </div>
    <div className='modal-buy-buttons'>

    <ReactWhatsapp
                      //  style={{borderRadius: '10px', backgroundColor:'rgb(5, 248, 78)', border: '1px solid rgb(5, 248, 78)'}} 
                       number='+58 4124668486'
                       message={`¡Hola! 👋 ¡Bienvenido a Surtymas! 

Mi compra es la siguiente:
                       
${results
  ?.map((product) => {
    let message = `"${product.titulo}". Precio: $${product.precio}, Precio al mayor: $${product.precio_mayor}, Codigo: ${product.codigo}`;
    if (product.tallas) {
      const tallasMessage = Object.entries(product.tallas)
        .map(([size, colors]) => {
          const deseos = colors.filter((color) => color.deseo > 0);
          if (deseos.length > 0) {
            const deseosMessage = deseos
            .map((color) => `${size}: ${color.deseo} color: ${color.color_seleccionado}`)
              // .map((color) => `${size}: ${color.deseo} color: ${color.color.replace('#', '')}`)
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

                    >Comprar uno solo</ReactWhatsapp>
    {/* <button className='modal-button' onClick={closeModal}>Cancelar</button> */}
    </div>
  </div>
</div>
</div>
                </ModalBody>}
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={open}>
                    Cerrar
                    </Button>
                  { cart && <button onClick={() => handleCart(user, results[0].titulo, results[0].precio, results[0].precio_mayor, results[0].imagenes[0], results[0]._id, results[0].codigo, results[0].tallas, results[0].tallas_zapatos)}>
                    Agregar
                    </button>}
                </ModalFooter>
              </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalBuyCart