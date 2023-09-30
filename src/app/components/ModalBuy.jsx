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


import React, { useState, useMemo, useEffect } from "react";
import CartDrawer from "./CartDrawer";
import { Image } from "@nextui-org/image";
import axios from "../../../api/axios";

function ModalBuy({producto, user}) {

  
    console.log(producto)
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [scrollBehavior, setScrollBehavior] = useState("inside");

    const [quantityChangesModal, setQuantityChangesModal] = useState({});
  const [results, setResults] = useState()

  const [product, setProduct] = useState()

  async function getProduct(){
    let isMounted = true;
    const controller = new AbortController();

    try {
        const response = await axios.get(`/productos/${producto[0]._id}`, {
            signal: controller.signal
        });
        // console.log(response.data);
        setProduct(response.data)
        return response.data
      
    } catch (err) {
        console.log(err);
        
    }

    return () => {
        isMounted = false;
        controller.abort();
    }

    
}

// useEffect(() =>{
//   getProduct()
//   console.log(product)
// }, [producto])


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

  const onChange = (productCode, size, index, value) => {
    const intValue = parseInt(value, 10);
    setResults((prevResults) => {
      console.log(prevResults)
      const updatedResults = prevResults.map((product) => {
        if (producto[0].codigo === productCode) {
          const colors = producto[0].tallas[size];
          if (!colors || index >= colors.length) return product;
  
          if (!isNaN(intValue)) {
            // If the input is a number, update the sold property
            const newSoldValue = Math.max(0, intValue);
            const quantityChange = newSoldValue - (colors[index].sold || 0); // Calculate the change in sold quantity
            colors[index].sold = intValue;
            colors[index].quantity -= quantityChange; // Decrease the quantity
          }
        }
        return product;
      });
      return updatedResults;
    });
    console.log(results)
  };



    useEffect(() =>{

      // applyChangesModal()
      // handleApplyChanges()
      setResults(producto)
      
    },[producto])

   

  return (
    <>
     <Image style={{cursor: 'pointer'}} onClick={onOpen} src='/edit1.svg' alt="edit" width={50}/>
     <Modal
     style={{zIndex: '100'}}
      className='mt-36 z-50'
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior={scrollBehavior}
      >
        <ModalContent>
        {(onClose) => (
            <>
            {producto[0] &&  <ModalHeader className="flex flex-col gap-1" style={{color:'black'}}>
              <div className='modal-info' style={{padding:'10px', border: 'none'}}>
      <img alt="producto" style={{width: '50px', height: '50px'}} src={`${producto[0].imagenes ? producto[0].imagenes[0] : producto[0].imagen}`}/>
      <p >Producto: {producto[0].titulo}{producto[0].nombre}</p>
    </div>
              </ModalHeader>}
              {producto[0] && <ModalBody>
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

{Object.entries(producto[0].tallas).map(([size, colors]) =>
  colors.map((color, index) =>
    (color.quantity > 0 || color.sold > 0) && (
      <div key={`${producto[0].codigo}-${size}`} className="size-section">
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
          <Input
            type="number"
            label="Agregue Cantidad"
            style={{ fontSize: '14px', marginTop: '12px', color: 'black' }}
            value={color.sold || 0}
            onChange={(e) => onChange(producto[0].codigo, size, index, e.target.value)}
          />
        </div>
      </div>
    )
  )
)}

    
    </div>
    </div>
    {/* <div className='modal-buy-buttons'>

    <ReactWhatsapp
        className='modal-button'
        style={{backgroundColor: 'rgb(0, 255, 64)', border: '1px solid rgb(0, 255, 64)'}}
      number="+58 4124668486"
      message={`¡Hola! 👋 ¡Bienvenido a Surtymas!
Mi correo es: ${user}
Mi compra es la siguiente:
                        
                        ${results?.map((product) => {
                          let message = `"${product.titulo}". Precio: $${product.precio}, Precio al mayor: $${product.precio_mayor}, Codigo: ${product.codigo}`;
                          if (product.tallas) {
                            const tallasMessage = Object.entries(product.tallas)
                              .map(([size, colors]) => {
                                const deseos = colors.filter((color) => color.deseo !== 0);
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
                              message += `\nTallas: \n${tallasMessage} piezas`;
                            }
                          }
                          return message;
                        })}
                        Nuestro equipo te atenderá pronto. ¡Gracias! 🛍️`}
    >
      Comprar por WhatsApp
    </ReactWhatsapp>
    <button className='modal-button' onClick={closeModal}>Cancelar</button>
    </div> */}
  </div>
</div>
</div>
                </ModalBody>}
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                    </Button>
                    <button onClick={() => handleCart(user, results[0].titulo, results[0].precio, results[0].precio_mayor, results[0].imagenes[0], results[0]._id, results[0].codigo, results[0].tallas, results[0].tallas_zapatos)}>
                    Agregar
                    </button>
                </ModalFooter>
              </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalBuy