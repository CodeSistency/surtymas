'use client'
import React, {useState} from 'react'
import {LiaSearchSolid} from 'react-icons/lia'
import { useRouter } from 'next/navigation'
import Search from '../actions/Search'


function InputNav() {

    const [search, setSearch] = useState()
    const router = useRouter()
  return (
    <form onSubmit={() => router.push(`productos/search/${search}`)} className='nav-link-search'>
    {/* // <form action={Search(search)} className='nav-link-search'> */}
                  <div className="search-nav">
                    <form style={{paddingBottom: '0'}} name="search search-relative" className=" search-relative-nav">
                        <input type="text" className="input-search-nav "  onChange={(e) => setSearch(e.target.value)}/>
                        {/* <input type="text" className="input-search-nav " onChange={(e) => setSearchQuery(e.target.value)} name="txt"  /> */}
                        <LiaSearchSolid fontSize={25} style={{top:'50%'}}className="search-button-nav" />
                    </form>
                  </div>
              </form>
  )
}

export default InputNav