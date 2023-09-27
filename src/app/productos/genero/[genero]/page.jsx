import React from 'react'
import Genero from '../../../components/Genero'

function page({params}) {
  return (
    <>
        <Genero params={params}/>
    </>
  )
}

export default page