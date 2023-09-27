import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card"
import {Image} from "@nextui-org/image"
// import {Button} from "@nextui-org/button";
import Button from './Button'
import {Badge} from "@nextui-org/badge";
import {CartIcon} from "./icon/cartIcon";
import Link from "next/link";

export default function CardItem({product, children}) {

    // console.log('is working', product)
  return (
    <div>
        <div style={{minWidth: '250px'}} className="p-1 h-full ">
        
                    <Card isPressable className="py-4 h-full relative" >
                        <div className="cart-position" style={{zIndex: '20'}}>
                            <Badge color="danger"   shape="circle">
                                
                                <CartIcon  size={35} 
                                
                                   
                                />
                            </Badge>
                        </div>


                        <CardHeader className="overflow-visible py-2" >
                            <Link href={`/productos/${product._id}`}>
                                <Image isZoomed src={product.imagenes[0]}  className="object-cover rounded-xl w-full h-60" style={{width: '270px'}}/>
                            </Link>
                            
                        </CardHeader>
                        <CardBody className="pb-0 pt-2 px-4 flex-col items-start h-24">
                            <h4 className="font-bold text-large ">{product.titulo}</h4>
                            <p className="text-tiny uppercase font-bold">{product.precio}</p>
                            <small className="text-default-500">{product.codigo}</small>
                            
                        </CardBody>
                        <div className="px-2">
                            {children}
                            {/* <Button  radius="full" className="w-full  self-end justify-self-end bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                            Comprar
                            </Button> */}

                        </div>
                
                        
                     
                        
                        {/* <CardBody className="overflow-visible py-2">
                            <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src={product.imagenes[0]}
                            width={270}
                            />
                        </CardBody> */}
                    </Card>
                    {/* <h3>{product.titulo}</h3> */}
                </div>
    </div>
  )
}

