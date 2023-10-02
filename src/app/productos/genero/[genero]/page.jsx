import React from 'react'
import Genero from '../../../components/Genero'
import Categories2 from '../../../components/Categories2'

function page({params}) {
  return (
    <>
        <Categories2 />
        <Genero params={params}/>
    </>
  )
}

export default page