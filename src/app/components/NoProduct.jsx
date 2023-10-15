import Image from 'next/image'
import React from 'react'

function NoProduct() {
  return (
    <div
    style={{
 
        
        // background: 'radial-gradient(circle, #ff2b88 50%, #f7a618 )',
        color: 'white',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',}}
        className='sm:h-full sm:w-full md:h-full md:w-full lg:w-full lg:h-[80vh]'
    >
        <Image
        src={`/agotado.png`}
        width={`1000`}
        height={`1000`}
        className='w-full h-full max-h-[700px]'
        style={{objectFit: 'contain'}}

        
        />
    </div>
  )
}

export default NoProduct