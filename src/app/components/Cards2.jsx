
import axios from "../../../api/axios"
import CardItem4 from './CardItem4'
import ButtonCta from "./Button";
import Button3 from "./Button3";
import Cart from './Cart'
import { getServerSession } from "next-auth/next"
import { options } from "../api/auth/[...nextauth]/options"
import { Button } from "@nextui-org/button";
import Link from "next/link";
import ButtonCart from './ButtonCart'
import ButtonCart2 from './ButtonCart2'


// async function getProducts(){
//     const res = await fetch('https://backend-5m1g.onrender.com/productos/limited')

//     return res.json()
// }

export default function Cards() {

   
    // console.log(products);
  return (
    <>
     <div className="flex gap-2 items-center min-h-45 px-4 py-8 card-container">
        <CardItem4
            titulo='Pantalo de vestir'
            codigo="0275"
            precio="10"
            id={`6517035f9692b4c4063e2370`}
            imagen={`https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/1696006898126Screenshot_20230626-204951_2.jpg?alt=media&token=7a757a60-d061-490d-b8fb-872fbd5078f5`}
        
        />
               <CardItem4
            titulo='Pantalo de vestir'
            codigo="0275"
            precio="10"
            id={`6517035f9692b4c4063e2370`}
            imagen={`https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/1696006898126Screenshot_20230626-204951_2.jpg?alt=media&token=7a757a60-d061-490d-b8fb-872fbd5078f5`}
        
        />
        

     </div>
        
    </>
  )
}

