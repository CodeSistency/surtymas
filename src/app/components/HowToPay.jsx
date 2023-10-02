'use client';

import { Accordion } from 'flowbite-react';

export default function HowToPay() {
  return (

 

   
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>
          Primer paso
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
              Seleccione metodo de envio, despues rellene el formulario con sus datos, en caso de recoger en tienda no pondra direccion.
            </p>
          </p>
       

        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
         Segundo paso
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
              Seleccione Prendas. Primero debe escoger el metodo de pago que usara, luego vera el producto, clickea el primer icono, eso lo llevara a la seleccion de prendas. Asegurese de seleccionar todas las prendas antes de continuar.
            </p>
          </p>
         
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          Tercer paso
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
              Ya completado el proceso, podra verificar que todos sus datos esten correctos, ya puede comprar el producto, sera redirigido a WhatsApp y podra concretar la compra.
            </p>
          </p>
         
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    
  )
}


