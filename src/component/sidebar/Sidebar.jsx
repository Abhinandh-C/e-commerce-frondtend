import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import shoe from '../../assets/images/shoes.gif'
import { Link} from 'react-router-dom';

const Sidebar = () => {

const[value,setValue]=useState([100,60000])
const[value2,setValue2]=useState(0)

  return (
    <div>
        <div className='sidebar'>
            <div className="filterBox">
                <h6>PRODUCT CATEGORIES</h6>
                <div className='scroll'>
                <ul>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox />} label="Spare Parts" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox />} label="Beverages" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox />} label="Comics" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox />} label="Packaged Foods" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox />} label="Kitchen Appliances" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox />} label="Beauty Care" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox />} label="Footwear" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox />} label="Toys & Games" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox />} label="Grocery & Food" />
                    </li>
                </ul>
     
    </div>
            </div>

            <div className="filterBox">
                <h6>FILTERING PRICE</h6>
                <RangeSlider value={value} onInput={setValue} min={100} max={60000} step={5} />
                <div className=" d-flex justify-content-between pt-2 pb-2 priceRange">
                    <span>From: <strong className='text-success'> Rs: {value[0]} </strong> </span>
                    <span className=''>From: <strong className='text-success'> Rs: {value[1]} </strong> </span>

                </div>
                </div>

                <div className="filterBox">
                <h6>PRODUCT STATUS</h6>
                <div className='scroll'>
                <ul>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox />} label="In Stock" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox />} label="On Sale" />
                    </li>
                    
                </ul>
     
    </div>
            </div>

            <div className="filterBox">
                <h6>BRANDS</h6>
                <div className='scroll'>
                <ul>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox />} label="Calvin Klein" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox />} label="Nike" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox />} label="Nykaa" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox />} label="Nestlé" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox />} label="Crocs" />
                    </li>
                    
                </ul>
     
    </div>
            </div>

           

<Link to="#">
 <img className='shoe' style={{width:"263px",height:"350px"}} src={shoe} alt="shoe" /> 

 </Link>
        </div>
      
    </div>
  )
}

export default Sidebar
