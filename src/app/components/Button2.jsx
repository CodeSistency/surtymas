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
import ListItems from "./ListItems";


function ButtonCta2({product, products}) {

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
        <Button onPress={onOpen} radius="full" className="w-full  self-end justify-self-end bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                                Comprar
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
                
                Comprar
                

                {/* <div className="space-y-1">
                  <h4 style={{color:'black'}} className="text-medium font-medium">Info de Envio</h4>
                  <p className="text-small text-default-400">Rellene todos sus datos, para concretar la compra</p>
              </div>
              <Divider className="my-4" /> */}
     
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
                    <p style={{color:'black'}}>Direccion</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Avatar name="2"
                            classNames={{
                              // base: `${step2 && 'blue'}`,
                              icon: "text-black/80",
                            }}
                    
                    />
                    <p style={{color:'black'}}>Metodo</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Avatar name="3"
                            classNames={{
                              // base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                              icon: "text-black/80",
                            }}
                     />
                    <p style={{color:'black'}}>Confirmar</p>
                  </div>

                </div>
                
              <Dropdown
                // style={{marginTop: '-20px'}}
                style={{paddingTop: '-20px'}}
                      >
              <DropdownTrigger>
                <Button 
                  variant='solid'
                  color='primary'
                  className="capitalize"
                >
                  {selectedValue}
                </Button>
              </DropdownTrigger>
              <DropdownMenu 
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
              >
                <DropdownItem style={{color:'black'}} key="Recoger en Tienda">Recoger en Tienda</DropdownItem>
                <DropdownItem style={{color:'black'}} key="Delivery">Delivery</DropdownItem>
                <DropdownItem style={{color:'black'}} key="Envio Nacional">Envio Nacional</DropdownItem>
                
              </DropdownMenu>
            </Dropdown>

            {selectedValue != 'Recoger en Tienda' &&
              <div className="flex flex-col gap-2">

              
              <div className="flex items-center gap-2">
              <Input
                type="text"
                label="Nombre"
                style={{fontSize: '14px', marginTop:'12px', color:'black'}}
                // defaultValue="junior@nextui.org"
                // className="w-full"
                {...nombreAttribs}
                
              />
              <Input
                type="text"
                label="Apellido"
                style={{fontSize: '14px', marginTop:'12px', color:'black'}}
                {...apellidoAttribs}
                // defaultValue="junior@nextui.org"
                // className="w-full"
              />
            </div>

            <Input
                type="text"
                label="Direccion 1"
                style={{fontSize: '14px', marginTop:'12px', color:'black'}}
                {...direccionAttribs}
                // defaultValue="junior@nextui.org"
                // className="w-full"
              />
            <Input
                type="text"
                label="Direccion 2*"
                style={{fontSize: '14px', marginTop:'12px', color:'black'}}
                {...direccionOpcionalAttribs}
                // defaultValue="junior@nextui.org"
                // className="w-full"
              />
              </div>
              }


{/* Metodo de Pago */}

    {/* <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className="capitalize"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="pago movil">Pago Movil</DropdownItem>
        <DropdownItem key="transferencia">Transferencia</DropdownItem>
        <DropdownItem key="divisa">Divisa</DropdownItem>
        
      </DropdownMenu>
    </Dropdown> */}

    
    
              </ModalBody>}

              {step2 && <ModalBody >

                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <Avatar name="1"
                            classNames={{
                              // base: `${step1 && 'blue'}`,
                              icon: "text-black/80",
                            }}
                    />
                    <p style={{color:'black'}}>Direccion</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Avatar name="2"
                            classNames={{
                              // base: `${step2 && 'blue'}`,
                              icon: "text-black/80",
                            }}
                    
                    />
                    <p style={{color:'black'}}>Metodo</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Avatar name="3"
                            classNames={{
                              // base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                              icon: "text-black/80",
                            }}
                     />
                    <p style={{color:'black'}}>Confirmar</p>
                  </div>

                </div>
              
                
              

            
            <Select
              items={['pago movil', 'transferencia', 'divisa']}
              {...pagoAttribs}
              label="Metodo de pago"
              placeholder="Seleccione un metodo"
              className="max-w-xs"
              variant='bordered'
              color="primary"
              style={{color:'black'}}
            >
              {/* {(animal) => <SelectItem key={animal.value}>{animal.label}</SelectItem>} */}
              <SelectItem style={{color:'black'}} key={'pago movil'}>Pago Movil</SelectItem>
              <SelectItem style={{color:'black'}} key={'transferencia'}>Transferencia</SelectItem>
              <SelectItem style={{color:'black'}} key={'divisa'}>Divisa</SelectItem>
            </Select>

            <Divider />
            
            <div >

              <ListItems products={products} />
            </div>

{/* Metodo de Pago */}

    {/* <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className="capitalize"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="pago movil">Pago Movil</DropdownItem>
        <DropdownItem key="transferencia">Transferencia</DropdownItem>
        <DropdownItem key="divisa">Divisa</DropdownItem>
        
      </DropdownMenu>
    </Dropdown> */}

   
    
    
              </ModalBody>}

             {step3 && <ModalBody >
              
              <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <Avatar name="1"
                            classNames={{
                              // base: `${step1 && 'blue'}`,
                              icon: "text-black/80",
                            }}
                    />
                    <p style={{color:'black'}}>Direccion</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Avatar name="2"
                            classNames={{
                              // base: `${step2 && 'blue'}`,
                              icon: "text-black/80",
                            }}
                    
                    />
                    <p style={{color:'black'}}>Metodo</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Avatar name="3"
                            classNames={{
                              // base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                              icon: "text-black/80",
                            }}
                     />
                    <p style={{color:'black'}}>Confirmar</p>
                  </div>

                </div>

              <h1 className="text-black">Confirmacion</h1>
              <Divider/>

              <div className='h-[300px]'>

                <ListItems products={products} />
              </div>

              <h4 className="text-black">Datos: {nombre} {apellido}</h4>
              <div className="flex items-start justify-between gap-8 py-2 text-gray-500">

                <div className="w-[70%]">
                  <h4 className="py-1">Direccion:</h4>
                  <Divider/>
                  <div>
                    <p>Direccion 1: {direccion}</p>
                    <p>Direccion 2: {direccionOpcional}</p>
                  </div>
                </div>

                <div className="w-[70%]">
                  <h4 className="py-1">Metodo de Pago:</h4>
                  <Divider/>
                  <div>
                    <p>Metodo: {pago}</p>
                    
                  </div>
                </div>
              </div>

              <h2 className="text-black">Total: 0</h2>
              <Button color='success' className="w-full p-4" variant="shadow" onPress={onClose}>
                    Comprar
                  </Button>


              

    
              </ModalBody>}

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>

                {step1 &&

                  <div>
                    <Button color='primary' onPress={stepTwo}>
                      Siguiente
                    </Button>
                  </div>
                  }

                {step2 &&

                  <div className="flex items-center gap-2">
                    <Button color="primary" variant="light" onPress={stepOne}>
                      Atras
                    </Button>
                    <Button color='primary' variant="solid" onPress={stepThree}>
                      Siguiente
                    </Button>
                  </div>
                  }

                {step3 &&

                <div className="flex items-center gap-2">
                  <Button color="primary" variant="light" onPress={stepTwo}>
                    Atras
                  </Button>
                  <Button color='success' variant="solid" onPress={onClose}>
                   {products ? <ReactWhatsapp
                      //  style={{borderRadius: '10px', backgroundColor:'rgb(5, 248, 78)', border: '1px solid rgb(5, 248, 78)'}} 
                       number='+58 4124668486'
                       message={`¡Hola! 👋 ¡Bienvenido a Surtymas! 
Mi correo es: 
Mi compra es la siguiente:
                       
${products?.map((product) => {
                         let message = `"${product.nombre}". Precio: $${product.precio}, Precio al mayor: $${product.precio_mayor}, Codigo: ${product.codigo}`;
                         if (product.tallas) {
                           const tallasMessage = Object.entries(product.tallas)
                             .map(([size, colors]) => {
                               const deseos = colors.filter((color) => color.deseo !== 0);
                               if (deseos.length > 0) {
                                 const deseosMessage = deseos
                                   .map((color) => `${size}: ${color.deseo || 0}`)
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

                    /> :
                    
                    <ReactWhatsapp
                    number='+58 4124668486'
                    message={`Hola`}
                    />}
                  </Button>
                </div>
                }
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

export default ButtonCta2