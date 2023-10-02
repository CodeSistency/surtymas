'use client';

import { Image } from '@nextui-org/image';
import { Carousel } from 'flowbite-react';

export default function CarouselProduct({images}) {
  console.log(images)
  return (
    <Carousel slide={false} >

      {/* {images?.map(image => {
        console.log(image)
        return <img src={`${image}`}/>
      })}
         */}
         {/* <img src={images[0]}/>
          */}

            <img
        
                alt="..."
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            >

                
            </img>
            
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      />
    </Carousel>
  )
}


