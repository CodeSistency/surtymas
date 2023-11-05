import Hero from './components/Hero'
// import Cards from './components/Cards'
import Cards2 from './components/Cards2'
import Grid from './components/Grid'
import Gallery from './components/Gallery'
import Categories from './components/Categories'
import { Suspense } from 'react'


export default async function Home() {

  return (
    <>
      <Hero />
      <Suspense fallback={<div>Cargando...</div>}>

        {/* <Cards />                       */}
        <Cards2 />   
      </Suspense>
       <Categories />
       <Suspense fallback={<div>Cargando...</div>}>
        <Gallery />   
      </Suspense>
      <Suspense fallback={<div>Cargando...</div>}>
      <Grid />  
      </Suspense>
      <Grid /> 
      
    </>
  )
}
