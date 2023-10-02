import React from 'react'
import Tipo from '../../../components/Tipo'

function page({params}) {
  return (
    <>
      <Categories2 />
        <Tipo params={params}/>
    </>
  )
}

export default page