import React, { useState } from 'react'
import { HiMiniXMark, HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

const GifSearch = () => {
    const [query,setQuery]=useState("")
    const navigate=useNavigate()
    const searchGifs=async(e)=>{
        if(query.trim===""){
            return
        }
        navigate(`/search/${query}`)
        
    }
    const searchGifsKey=async(e)=>{
        if(query.trim===""){
            return
        }
        if(e.key==='Enter')
            navigate(`/search/${query}`)
        
    }
  return (
    <div className='flex relative'>
    <input 
        type='text'
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        placeholder='Search all the GIFs and Stickers'
        className='w-full pl-4 pr-14 py-5 text-xl text-black rounded-tl rounded-bl border border-grey-300 outline-none'
        onKeyDown={searchGifsKey}
    />
    {query && (
        <button onClick={()=>setQuery("")} className='absolute bg-gray-300 opacity-90 rounded-full right-20 mr-2 top-6'><HiMiniXMark size={22}/></button>
    )}

    <button onClick={searchGifs} className='bg-gradient-to-tr from-pink-600 to-pink-400 text-white px-4 py-2 rounded-tr rounded-br'>
    <HiOutlineMagnifyingGlass size={35} className='-scale-x-100'/>
    </button>
    </div>
  )
}

export default GifSearch