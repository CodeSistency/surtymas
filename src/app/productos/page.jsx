import React, { Suspense } from 'react'
import Productos from '../components/Products'
import ProductsAll from '../components/ProductsAll'

function page() {
  return (
    <>
    <Categories2 />
    <Suspense fallback={<p>Cargando...</p>}>

        <Productos/>
    </Suspense>
    {/* <p>Productos</p> */}
    </>
  )
}

export default page