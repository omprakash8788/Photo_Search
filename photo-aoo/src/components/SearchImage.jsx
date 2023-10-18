import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { ImageContext } from '../App'

const SearchImage = () => {
    const [search, setSearch]=useState('')
    const { fetchData, setSearchImage} =useContext(ImageContext)

  const handleInputChange=(e)=>{
  setSearch(e.target.value)
  }
  const handleButtonSearch=()=>{
    fetchData( `search/photos?page=1&query=${search}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
    setSearch("");
    setSearchImage(search)
  }
  const handleEnterSearch=(e)=>{
    if(e.key==='Enter'){
        fetchData( `search/photos?page=1&query=${search}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
        setSearch("");
    setSearchImage(search)

    }
  }

  return (
    <div className='flex'>
      <input className='bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl' type="search" placeholder='Search Any Photos.....' 
      value={search}
      onChange={handleInputChange}
      onKeyDown={handleEnterSearch}
      />
      <button 
      onClick={handleButtonSearch}
      disabled={!search}
      className='bg-green-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400'
      >Search</button>
    
    </div>
  )
}

export default SearchImage
