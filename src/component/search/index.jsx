import React from 'react'
import Button from '@mui/material/Button';
import { IoSearchOutline } from "react-icons/io5";
import { TypeAnimation } from 'react-type-animation';
import { useState,useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const SearchBar = () => {
    const navigator = useNavigate()
    const location = useLocation()  
    const [searchPage, setSearchPage] = useState(false)

    useEffect(()=>{
        const isSearch = location.pathname === '/search'
        setSearchPage(isSearch)
      },[location])
      const handleRedirectNavigator =()=>{
        navigator('search')
      }    



  return (
      <div className='w-full h-full'>
      {
        !searchPage ? (
          // not in search page
      <div onClick= {handleRedirectNavigator} className='animation '>
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Search for Mobiles',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Search for Electronics',
        1000,
        'Search for Fashon',
        1000,
        'Search for Appliances',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </div>

):(
    // in search page
    <div className='searchbar '  >
      <input type="text" placeholder='Search for products' />
    </div>
  )
}

    
      
      
      <Button><  IoSearchOutline /></Button>
    </div>
  )
}

export default SearchBar
