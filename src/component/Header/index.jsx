import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import React from 'react'
import CountryDrop from '../CountryDropdown';

const Header = () => {
  return (
    <div>
        <div className='headerWrapper'>
          <div className='top-strip bg-blue'>
            <div className='container'>
              <p className='mb-0 mt -0 text-center'>Due to the <b> High Order Alert </b>order may be processed with a slight delay</p>
            </div>
          </div>


          <div className='header'>
            <div className='container'>
              <div className='row'>
                <div className='logoWrapper d-flex align-items-center col-sm-2'>
                  <Link to={'/'}><img src={logo} alt='logo' /></Link>
                </div>


                <div className='col-sm-10 d-flex align-items-center part2'>
                <CountryDrop />
                
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header
