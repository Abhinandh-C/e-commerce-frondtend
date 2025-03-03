import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import React from 'react'
import CountryDrop from '../CountryDropdown';
import SearchBar from '../search';
import { FiUser } from "react-icons/fi";
import { IoBagHandleOutline } from "react-icons/io5";
import Button from '@mui/material/Button';  
import Navigation from './Navigation';

const Header = () => {
  return (
    <div  className='navline'>
        <div className='headerWrapper'>
          <div className='top-strip bg-blue'>
            <div className='container'>
              <p className='mb-0 mt -0 text-center'>Due to the <b> High Order Alert </b>order may be processed with a slight delay</p>
            </div>
          </div>

          {/* logo has been added  */}
          <header className='header'>
            <div className='container'>
              <div className='row'>
                <div className='logoWrapper d-flex align-items-center col-sm-2'>
                  <Link to={'/'}><img src={logo} alt='logo' /></Link>
                </div>

                {/* country drop down added here */}
                <div className='col-sm-10 d-flex align-items-center part2'>
                <CountryDrop />
                
              {/* header search bar */}

               <div className='headerSearch ml-3 ms-4 d-lg-block'>
                <SearchBar />
               </div>
                
               <div className='userIcon d-flex justify-content-between border-black '>
                <Button className='circle '><FiUser /></Button>
                  <span className='price '>$5.25</span>
                  <div className='position-relative ml-2'>
                  <Button className='cartTab'><IoBagHandleOutline /></Button>
                  <span className='count d-flex align-items-center justify-content-center'>1</span>
               </div>
               </div>
                
                </div>
              </div>
            </div>
          </header>
<span className='navline' s ></span>
        <Navigation />

        </div>
        
    </div>
  )
}

export default Header
