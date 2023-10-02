import React from 'react'
import Tipo from '../../../components/Tipo'
import Categories2 from '@/app/components/Categories2'

function page({params}) {
  return (
    <>
      <Categories2 />
        <Tipo params={params}/>
    </>
  )
}

export default page