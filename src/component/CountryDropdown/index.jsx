import React from 'react'
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";

const CountryDrop = () => {
  return (
    <div>
             <Button className='countryDrop'>
                <div className='info d-flex flex-column'>
                  <span className='label' >Your Location</span>
                  <span className='name'>Kozhikode</span>
                </div>
                <div className='ms-4'>
                <span className='ml-auto'><FaAngleDown /></span>
                </div>
              </Button>
                
      
    </div>
  )
}

export default CountryDrop
