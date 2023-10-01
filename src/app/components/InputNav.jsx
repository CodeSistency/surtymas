'use client'
import React, {useState} from 'react'
import {LiaSearchSolid} from 'react-icons/lia'
import { useRouter, redirect } from 'next/navigation'
import Search from '../actions/Search'
import { Button } from '@nextui-org/react'


function InputNav() {

    const [search, setSearch] = useState()
    const router = useRouter()

    function searchProduct(){
      redirect(`/productos/search/${search}`)
    }
  return (
    


    <div  className='nav-link-search'>
        {/* // <form action={Search(search)} className='nav-link-search'> */}
                      <div className="search-nav flex items-center gap-2">
                        <form onSubmit={() => router.push(`/productos/search/${search}`)} style={{paddingBottom: '0'}}  name="search search-relative" className=" search-relative-nav">
                            <input type="text" className="input-search-nav "  onChange={(e) => setSearch(e.target.value)}/>
                            {/* <input type="text" className="input-search-nav " onChange={(e) => setSearchQuery(e.target.value)} name="txt"  /> */}
                            {/* <LiaSearchSolid fontSize={25} style={{top:'50%'}}className="search-button-nav" /> */}
                        </form>
                        <Button className='m-0' onClick={() => router.push(`/productos/search/${search}`)} color='warning' variant='ghost'>Buscar</Button>
                      </div>
                  </div>
  )
}

export default InputNav