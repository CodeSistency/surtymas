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





import React, { useState, useMemo } from "react";
import CartDrawer from "./CartDrawer";
import ModalBuy from "./ModalBuy";
// import { user } from "@nextui-org/react";


async function Cart({product, products}) {

  
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

  console.log(product)

  const [step1, setStep1] = useState(true)
  const [step2, setStep2] = useState(false)
  const [step3, setStep3] = useState(false)

  function stepOne(){
    setStep1(true)
    setStep2(false)
    setStep3(false)
  }

  function stepTwo(){
    setStep1(false)
    setStep2(true)
    setStep3(false)
  }

  function stepThree(){
    setStep1(false)
    setStep2(false)
    setStep3(true)
  }
       
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState("inside");

  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Recoger en Tienda"]));
  console.log(selectedKeys)

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const [check, toggleCheck] = useToggle('info', true);
  const [nombre, resetNombre, nombreAttribs] = useInput('nombre', '')
  const [apellido, resetApellido, apellidoAttribs] = useInput('apellido', '')
  const [direccion, resetDireccion, direccionAttribs] = useInput('direccion', '')
  const [direccionOpcional, resetDireccionOpcional, direccionOpcionalAttribs] = useInput('direccionOpcional', '')
  const [ciudad, resetCiudad, ciudadAttribs] = useInput('ciudad', '')
  const [estado, resetEstado, estadoAttribs] = useInput('estado', '')

  const [pago, resetPago, pagoAttribs] = useInput('pago', '')

  return (
    <>
        <Button onPress={onOpen} radius="full" color="primary" variant="solid" className="w-full  self-end justify-self-end text-white shadow-lg">
                                Carrito
        </Button>
        {/* <RadioGroup
        label="Select scroll behavior"
        orientation="horizontal"
        value={scrollBehavior}
        onValueChange={setScrollBehavior}
      >
        <Radio value="inside">inside</Radio>
        <Radio value="outside">outside</Radio>
      </RadioGroup> */}
      <Modal
      style={{zIndex: '100'}}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior={scrollBehavior}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1" style={{color:'black'}}>
                
                Agregar al carro
                
     
              </ModalHeader>


              {step1 && <ModalBody >

                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <Avatar name="1"
                            classNames={{
                              // base: `${step1 && 'blue'}`,
                              icon: "text-black/80",
                            }}
                    />
                    <p style={{color:'black'}}>Selecciona Cantidad</p>
                  </div>


                </div>
              
                
              

            
            

            <Divider />
            
            <div >

            {/* <ListItem product={product} >
                  <ModalBuy product={product} />
                </ListItem> */}
                <ListItem product={product} />
            </div>



   
    
              {/* <Button variant="solid" color="primary" className="w-full" size='md' onPress={handleCart(user, product.titulo, product.precio, product.precio_mayor, product.imagenes[0], product._id, product.codigo, product.tallas, product.tallas_zapatos)}>Agregar al carro</Button> */}
              </ModalBody>}


              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>

                
                   
                
                
                
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default Cart