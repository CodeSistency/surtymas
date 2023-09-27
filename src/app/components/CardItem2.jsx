import React from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card"
import {Image} from "@nextui-org/image"
import {Button} from "@nextui-org/button";
import {Badge} from "@nextui-org/badge";
import {CartIcon} from "./icon/cartIcon";
import Link from 'next/link';

function CardItem2({product}) {

    // console.log('Is working')
  return (
    <Link href={`/productos/${product._id}`}>
      <Card
      isFooterBlurred
      radius="lg"
      className="border-none relative h-52"
    >
      {/* <div className="cart-position">
                              <Badge color="danger"   shape="circle">
                                  <CartIcon  size={30} />
                              </Badge>
                          </div> */}
      <Image
        alt=""
        className="object-cover h-full w-full"
      
        src={product.imagenes[0]}
      
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-sm text-shadow text-white/80">{product.titulo.slice(0, 20)}</p>
        <Button className="text-xl  text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          {product.precio}$
        </Button>
      </CardFooter>
    </Card>
    </Link>
  )
}

export default CardItem2