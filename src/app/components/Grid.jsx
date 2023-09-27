import React from "react";

import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {Button} from "@nextui-org/button";

export default function Grid() {
  return (
    <div className="w-full gap-2 grid grid-cols-12 grid-rows-2 px-4 py-2">
    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold ">Mujer</p>
        <h4 className="text-black font-medium text-large">Encuentra aqui la ropa mas glamurosa</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/ropa-mujeres.jpg"
        priority={true}
      />
    </Card>
    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold ">Hombre</p>
        <h4 className="text-black font-medium text-large">Vistete irresistible</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/ropa-hombre.jpg"
        priority={true}
      />
    </Card>
    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold ">Zapatos</p>
        <h4 className="text-black font-medium text-large">Los mejores precios en zapatos</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/zapatoss.jpg"
        priority={true}
      />
    </Card>
    <Card isPressable isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">New</p>
        <h4 className="text-black font-medium text-2xl">Acme camera</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="/yuri-shirota-p0hDztR46cw-unsplash.jpg"
        priority={true}
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">No te lo pierdas.</p>
          <p className="text-black text-tiny">Descuentos Ya.</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Clikea Aqui!!
        </Button>
      </CardFooter>
    </Card>
    <Card isPressable isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Explora aqui</p>
        <h4 className="text-white/90 font-medium text-xl">Todos los productos a tu disposicion</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="/model.jpg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="/images/breathing-app-icon.jpeg"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Que esperas</p>
            <p className="text-tiny text-white/60">Consigue lo mejor aqui</p>
          </div>
        </div>
        <Button radius="full" size="sm">Explora ya</Button>
      </CardFooter>
    </Card>
  </div>
  );
}