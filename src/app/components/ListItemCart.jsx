'use client'
import { Card, CardBody } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import {Badge} from "@nextui-org/badge";
import axios from '../../../axio/axios'
// import { options } from "../api/auth/[...nextauth]/options"
// import { getServerSession } from "next-auth"

// import ff from '../../../public/'


 function ListItemCart({children, product}) {
  console.log(product)

  const [producto, setProducto] = useState()

  async function getProduct(){
    let isMounted = true;
    const controller = new AbortController();

    try {
        const response = await axios.get(`/productos/${product}`, {
            signal: controller.signal
        });
        console.log(response.data);
        setProducto(response.data)
        const exists = carrito.some((item) => item._id === response.data._id);
        console.log(exists)
        // if (!exists) {
        //   setCarrito((prev) => [...prev, response.data]);
        // }
        console.log("Carrito es updating", carrito)
        return response.data
        
      
    } catch (err) {
        console.log(err);
        
    }

    return () => {
        isMounted = false;
        controller.abort();
    }

}

useEffect(() => {
  getProduct()
}, [])

const renderedColors = [];


console.log(product, producto?.titulo, producto?.precio, producto?.imagenes, producto)

// const session = await getServerSession(options)

  const {carrito, setCarrito, color, results, setResults, setColor, isOpen, handleToggle} = useGlobalContext();
    // console.log(useGlobalContext(), color)

  // function totalItems(){
  //   let total = 0
    
  //   Object.entries(product.tallas).map(([size, colors]) =>
  //   colors.map((color, index) =>{
  //     console.log(total, color)
  //   })
  //   )
  //   return total
  // }

  function totalItems(){
    
    let total = 0;
    carrito.map(carro => {
      if (carro._id == product._id){
      
        Object.entries(carro.tallas).forEach(([size, colors]) => {
          colors.forEach((color) => {
            total += color.deseo || 0;
          });
        });
      } 
    })
    console.log(total)
    
    return total
  }

  function Colors(){
    
    carrito.map(carro => {
      if (carro._id == product._id){
      
        Object.entries(carro.tallas).forEach(([size, colors]) => {
          colors.forEach((color) => {
            color.deseo > 0 &&

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
            

          });
        });
      } 
    })
    
  }

  

    // console.log(totalItems())
  return (
    <div className='w-full flex relative'>

    
    
    {/* <Badge content="5" color="primary" className='!flex' size='lg'> */}

    {/* <div style={{top: '-10px', right: '-10px', zIndex: '10', borderRadius: '50%'}} className='bg-blue-500 w-[30px] h-[30px] flex justify-center items-center absolute'>
      <p style={{color: 'white'}}>{totalItems()}</p>
    </div> */}

    <Card
    // style={{padding: '-10px'}}
    fullWidth
    isBlurred
    className="border-none bg-background/60 dark:bg-default-100/50 w-full p-2"
    shadow="sm"
  >
  
   
        <div className='flex items-center min-h-18 max-h-25  w-full gap-1'>
        <Image
            alt="Album cover"
            className="object-cover h-full w-16"
            
            shadow="md"
            // src={`${producto?.imagenes[0]}`}
            src={`${producto && producto?.imagenes[0]}`}

            
          />

            <div className="flex flex-col gap-0 w-[50px] flex-1">
              <div className='flex items-center gap-2'>
              <h4 className="font-semibold text-foreground/90 w-full">{`${producto ? producto?.titulo : "cargando..."}`}</h4>
              {/* <p>({totalItems()})</p> */}
              </div>
              {/* <h3 className="font-semibold text-foreground/90 w-full">{`${product[0]?.titulo || product.nombre || product.titulo}`}</h3> */}
              <p className="text-small text-foreground/80 ">${`${producto ? producto?.precio : "cargando..."}`}</p>
              {/* <h1 className="text-large font-medium mt-2">{`${product[0]?.codigo || product.codigo}`}</h1> */}
              <section className="lista-colores">
{/* {carrito.map((carro) => {
    if (carro._id === product._id) {
      return Object.entries(carro.tallas).map(([size, colors]) => {
        return colors.map((color) => {
          if (color.deseo > 0) {
            return (
                <div
                key={color.id} // Add a unique key for each rendered element
                style={{
                  backgroundColor: color.color,
                  borderRadius: "50%",
                  border: "1px solid gray",
                  height: "15px",
                  width: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.305)",
                }}
              ></div>
            );
          }
          return null; // Return null if the condition is not met (optional)
        });
      });
    }
    return null; // Return null if the condition is not met (optional)
  })} */}
</section>
            </div>
           

            <div className='flex items-center gap-0'>
                {children}
                {/* <Image src='/edit1.svg' width={50}/> */}
                {/* <Image src='/delete1.svg' alt='delete' width={50}/> */}
            </div>
          {/* <div className="flex justify-between items-start flex-1">
            <div className="flex flex-col gap-0 w-full ">
              <h3 className="font-semibold text-foreground/90 w-full">{product[0].titulo}</h3>
              <p className="text-small text-foreground/80 ">{product[0].codigo}</p>
              <h1 className="text-large font-medium mt-2">{product[0].precio}</h1>
            </div>
            
          </div> */}
        </div>


    
  </Card>
  {/* </Badge> */}
  </div>
  )
}

export default ListItemCart