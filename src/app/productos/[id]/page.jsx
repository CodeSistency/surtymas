import React from 'react'
import axios from '../../../../axio/axios';
import ButtonCta from '@/app/components/Button';
import { options } from "../../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import CommentForm from '@/app/components/CommentForm'
import moment from 'moment';
import CarouselProduct from '../../components/CarouselProduct';
import CarouselHero2 from '@/app/components/CarouselHero2';
import Categories2 from '@/app/components/Categories2';
import ButtonCart2 from '@/app/components/ButtonCart2';

async function page({params}) {

    

    console.log(params)

    async function getProduct(){
        let isMounted = true;
        const controller = new AbortController();
    
        try {
            const response = await axios.get(`/productos/${params.id}`, {
                signal: controller.signal
            });
            // console.log(response.data);
            return response.data
          
        } catch (err) {
            console.log(err);
            
        }
    
        return () => {
            isMounted = false;
            controller.abort();
        }

    }

    const renderedColors = [];

    const product = await getProduct()
    console.log(product)

    const session = await getServerSession(options)

  return (
    <section  className="bg-white dark:bg-gray-900">
    {/* <div className=" gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"> */}
    <div className=" gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:flex  sm:py-16 lg:px-6">
        <div className='sm:max-h-[400px] lg:max-h-full flex-1 h-[70vh] '>
            <CarouselHero2 images={product.imagenes}/>
        </div>
   
        {/* <img className="w-full sm:max-h-[400px] flex-1 lg:h-full dark:hidden" src={product.imagenes[0]} alt="dashboard image"/> */}
        {/* <img className="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image"/> */}
        <div className="mt-4 md:mt-0 flex-1">
          
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{product.titulo}</h2>
           {/*    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p> */}
            <hr style={{marginTop: '-10px', marginBottom: '5px'}}/>
<div className='precios'>
              <p style={{color: 'rgb(184, 11, 69)'}} className="producto precio dollars font-extrabold  text-black">{`${product?.precio}`}<span className='dolar'>$</span></p>
              <p className="producto precio-mayor dollars text-black"><strong>Mayor</strong> {`${product?.precio_mayor}`} <span className='dolar'>$</span></p>
              </div>

              <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400"><strong className='font-extrabold text-gray-900'>Descripcion:</strong> {product?.descripcion}</p>
            {/* <a href="#" className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Comprar
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a> */}

<h4 className='font-extrabold text-gray-900'>Tallas disponibles:</h4>
              <section className='lista-colores'>
                {Object.entries(product?.tallas).map(([size, colors]) => {
                  const totalQuantity = colors.reduce((total, color) => total + color.quantity, 0); // Calculate total quantity for the size
                  if (totalQuantity > 0) {
                    return (
                      <div key={size} className='py-4'>
                                {/* <h4 className="product">Talla {size}</h4> */}
                                
                                <div className="producto" style={{ border: "1px solid black", height: "5", width: "5", fontSize:'12px', color: 'black'}}>{size}</div>
                              </div>
                    );
                  }
                  return null; // Don't render if total quantity is 0
                })}


              </section>

              <h4 className='font-extrabold text-gray-900'>Colores disponibles:</h4>
              <section className='lista-colores px-1 py-4'>
                {/* {(() => {
                  const allColors = [];

                  // Collect all colors from all sizes into a single array
                  Object.values(product.tallas).forEach(colors => {
                    colors.forEach(colorObj => {
                      if (!allColors.includes(colorObj.color)) {
                        allColors.push(colorObj.color);
                      }
                    });
                  });

                  // Render unique colors
                  return allColors.map((color, index) => (
                    <div key={index} className="producto" style={{ backgroundColor: color, borderRadius: "50%", height: "20px", width: "20px", boxShadow: '0 0 5px 1px gray' }}></div>
                  ));
                })()} */}


     {
     
     Object.entries(product.tallas).map(([size, colors]) => {
      

      
        return colors.map((color) => {
        
          if (color.quantity > 0 && !renderedColors.includes(color.color)) {
            renderedColors.push(color.color);
            console.log(renderedColors)

            return (
             
              <div key={size} className="producto" style={{ backgroundColor: color.color, borderRadius: "50%", height: "20px", width: "20px", boxShadow: '0 0 5px 1px gray' }}></div>
            );
          }
          return null; // Return null if the condition is not met (optional)
        });
      })}
  
              </section>

              <ButtonCta user={session?.user} product={[product]}/>
              <ButtonCart2 product={product}/>
        </div>
    </div>

    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
  <div className="max-w-2xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Comentarios ({product.comentarios.length})</h2>
    </div>
    {/* <form className="mb-6">
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label for="comment" className="sr-only">Your comment</label>
            <textarea id="comment" rows="6"
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..." required></textarea>
        </div>
        <button type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            Post comment
        </button>
    </form> */}

    <CommentForm user={session?.user?.name} id={product._id}/>
    {
        product.comentarios.length ?

        product.comentarios.map(comentario => {
            return(
                <article key={comentario.fecha} className="p-6 border-1 text-base min-h-[80px] bg-white rounded-lg dark:bg-gray-900">
        <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    {/* <img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt="Michael Gough"/> */}
                        
                        {comentario.usuario}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-08"
                        title="February 8th, 2022">{moment(comentario.fecha).format('YYYY-MM-DD')}</time></p>
            </div>
            {/* <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
                <span className="sr-only">Comment settings</span>
            </button>
          */}
            {/* <div id="dropdownComment1"
                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                        <a href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                    </li>
                </ul>
            </div> */}
        </footer>
        <p className="text-gray-500 dark:text-gray-400">{comentario.comentario}</p>
        {/* <div className="flex items-center mt-4 space-x-4">
            <button type="button"
                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
                <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                </svg>
                Reply
            </button>
        </div> */}
        
    </article>
            )
        })
        
    :

    <p>No hay comentarios</p>

    }
   
  </div>
</section>
<Categories2 />
</section>
  )
}

export default page