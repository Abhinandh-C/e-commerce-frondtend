import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Sidebar = () => {
  return (
    <div>
        <div className='sidebar'>
            <div className="filterBox">
                <h6>PRODUCT CATEGORIES</h6>
                <div className='scroll'>
                <ul>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox defaultnotChecked />} label="Spare Parts" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox defaultnotChecked />} label="Beverages" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox defaultnotChecked />} label="Comics" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox defaultnotChecked />} label="Packaged Foods" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox defaultnotChecked />} label="Kitchen Appliances" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox defaultnotChecked />} label="Beauty Care" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox defaultnotChecked />} label="Footwear" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox defaultnotChecked />} label="Toys & Games" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox defaultnotChecked />} label="Grocery & Food" />
                    </li>
                </ul>
     
    </div>
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
