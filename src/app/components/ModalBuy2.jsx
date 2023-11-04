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

function ModalBuy2({product, tallas}) {



    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [scrollBehavior, setScrollBehavior] = useState("inside");

    const [quantityChangesModal, setQuantityChangesModal] = useState({});
  const [results, setResults] = useState()
  
  const onChangeModal = (size, index, value) => {
    // applyChangesModal()
    const changeKey = `${product[0].codigo}-${size}-${index}`;
    setQuantityChangesModal((prevChanges) => ({
      ...prevChanges,
      [changeKey]: parseInt(value, 10),
    }));
    console.log(changeKey)
    console.log(quantityChangesModal)
    
  };

 

  const applyChangesModal = () => {
    
      
          const updatedTallas = { ...product[0].tallas };
          Object.keys(updatedTallas).forEach((size) => {
            updatedTallas[size].forEach((color, index) => {
              const changeKey = `${product[0].codigo}-${size}-${index}`;
              const changeValue = parseInt(quantityChangesModal[changeKey], 10) || 0;
              const desireDifference = changeValue - color.deseo;
              color.deseo = changeValue
              color.quantity -= desireDifference;
              
              
            });
            setResults([{...product[0], tallas: updatedTallas}])
            return { ...product[0], tallas: updatedTallas };
          });
         
    console.log(results)
      
    };

    useEffect(() =>{
      applyChangesModal()
    },[quantityChangesModal])

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
              <ModalHeader className="flex flex-col gap-1" style={{color:'black'}}>
              <div className='modal-info' style={{padding:'10px', border: 'none'}}>
      <img alt="product[0][0]o" style={{width: '50px', height: '50px'}} src={`${product[0].imagenes ? product[0].imagenes[0] : product[0].imagen}`}/>
      <p >producto: {product[0].titulo}{product[0].nombre}</p>
    </div>
              </ModalHeader>
              <ModalBody>
              <div>

    
<div >
  <div className="modal-content-buy text-black">
    {/* <h3>¿Estás seguro de realizar esta compra?</h3> */}

    {/* <div className='modal-info' style={{margin: '15px 0', border: 'none'}}>
      <img style={{width: '50px', height: '50px'}} src={`${product[0][0].imagenes ? product[0][0].imagenes[0] : product[0][0].imagen}`}/>
      <p >product[0][0]o: {product[0][0].titulo}{product[0][0].nombre}</p>
    </div> */}
    
    <div>
      <div className='modal-tallas'>
    {/* {Object.entries(product[0][0].tallas).map(([size, colors]) => 
    colors.map((color, index) => (
           color > 0 && 
           <div key={`${product[0][0].codigo}-${size}`} className="size-section">
            <h3>{size}</h3>
                <div className="color-input lista-product[0][0]os" key={color._id}>
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
            

          <div className="color-input lista-product[0][0]os" key={color._id}>
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
              value={quantityChangesModal[`${product[0][0].codigo}-${size}-${index}`] || ""}
              onChange={(e) =>
                onChangeModal(size, index, e.target.value)
              }
            /> 
           
          
          </div>
        </div>
        ))
      
    )} */}

    {Object.entries(product[0].tallas).map(([size, colors]) =>
    colors.map((color, index) =>
    color.quantity > 0 &&

    <div key={`${product[0].codigo}-${size}`} className="size-section">
         <h3>{size}</h3>
        <div className="color-input lista-product[0][0]os" key={color._id}>
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
                style={{fontSize: '14px', marginTop:'12px', color:'black'}}
                // defaultValue="junior@nextui.org"
                // className="w-full"
                value={quantityChangesModal[`${product[0].codigo}-${size}-${index}`] || ""}
                onChange={(e) =>
                  onChangeModal(size, index, e.target.value)
                }
                
                
              />
             {/* <input
            style={{width: "70%", color: 'black'}}
              type="number"
              value={quantityChangesModal[`${product[0][0][0].codigo}-${size}-${index}`] || ""}
              onChange={(e) =>
                onChangeModal(size, index, e.target.value)
              }
            />  */}
           
          
          </div>
    </div>

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
                        
                        ${results?.map((product[0][0][0]) => {
                          let message = `"${product[0][0][0].titulo}". Precio: $${product[0][0][0].precio}, Precio al mayor: $${product[0][0][0].precio_mayor}, Codigo: ${product[0][0][0].codigo}`;
                          if (product[0][0].tallas) {
                            const tallasMessage = Object.entries(product[0][0].tallas)
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
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                    Close
                    </Button>
                </ModalFooter>
              </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalBuy2