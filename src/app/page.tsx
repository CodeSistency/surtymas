import Hero from './components/Hero'
import Cards from './components/Cards'
import Grid from './components/Grid'
import Gallery from './components/Gallery'
import Categories from './components/Categories'
import { Suspense } from 'react'


export default async function Home() {

  return (
    <>
      <Hero />
      <Suspense fallback={<div>Cargando...</div>}>

        <Cards />                      
      </Suspense>
       <Categories />
      <Gallery />
      <Grid /> 
      
    </>
  )
}
