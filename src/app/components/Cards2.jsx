
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
            titulo='Falda Corta'
            codigo="0070"
            precio="10"
            id={`651758e8da0802c4393930e6`}
            imagen={`https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/1696028824629Screenshot_20230627-220927_2.jpg?alt=media&token=61dca40d-67d2-474f-9339-81ccade35784`}
        
        />

<CardItem4
            titulo='Blusa mangas asimétricas'
            codigo="0083"
            precio="10"
            id={`65184bd2e9c057c84fcb8a8f`}
            imagen={`https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/16960909666161695930374219.jpg?alt=media&token=2b467ab5-d6ad-4fd6-8a4a-e1a4b97cd994`}
        
        />

<CardItem4
            titulo='Suéter con botones en las mangas'
            codigo="0250"
            precio="12"
            id={`65174516da0802c43938abe1`}
            imagen={`https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/16960236998761695929879236.jpg?alt=media&token=707eb0f2-c1c3-42cc-b2b8-ca4818c9e929`}
        
        />

<CardItem4
            titulo='Franela Oversize'
            codigo="0003"
            precio="10"
            id={`651734cada0802c4393874c0`}
            imagen={`https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/1696019097971Screenshot_20230630-081831_2.jpg?alt=media&token=191bd68f-331c-48d8-9a00-f874519d9a33`}
        
        />

<CardItem4
            titulo='Franela Oversize'
            codigo="0003"
            precio="10"
            id={`651734cada0802c4393874c0`}
            imagen={`https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/1696019097971Screenshot_20230630-081831_2.jpg?alt=media&token=191bd68f-331c-48d8-9a00-f874519d9a33`}
        
        />
        

     </div>
        
    </>
  )
}

