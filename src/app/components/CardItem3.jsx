
import {Button} from "@nextui-org/button";
import Link from "next/link";

function CardItem3({product, children}) {
  return (
    
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link href={`/productos/${product._id}`}>
    
        <img class=" rounded-t-lg h-[270px] w-full" src={product.imagenes[0]} alt="product image" />
    
    </Link>
    <div class="px-5 pt-1 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text- h-[60px] overflow-y-auto">{product.titulo}</h5>
        </a>
       
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">${product.precio}</span>
            
        </div>
        {/* <Button color="primary" className="w-full" variant="shadow">Comprar</Button> */}
        <div >
                            {children}
                            {/* <Button  radius="full" className="w-full  self-end justify-self-end bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                            Comprar
                            </Button> */}
                        </div>
    </div>
</div>

  )
}

export default CardItem3