import React, { useState } from 'react';
import { Button } from '@mui/material';
import { IoMdMenu } from 'react-icons/io';
import { FaAngleDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { GiTv } from "react-icons/gi";
import { CiMobile3 } from "react-icons/ci";
import { GiAmpleDress } from "react-icons/gi";
import { GiWashingMachine } from "react-icons/gi";
import { FaAngleRight } from "react-icons/fa6";


const Navigation = () => {

const[isOpenSideBar,setisOpenSideBar]=useState(false);



  return (
    <nav>
      <div className="container">
        <div className="row align-items-center" >
          {/* Left section */}
          <div className="col-6 col-md-3 navpart1">
            <div className='catWrapper'>
            <Button className="allcartTab d-flex align-items-center" onClick={()=>setisOpenSideBar(!isOpenSideBar)}>
              <span className="icon me-2">
                <IoMdMenu size={24} />
              </span>
              <span className="text d-none d-md-inline">ALL CATEGORIES</span>
              <span className="icon2 ms-2">
                <FaAngleDown size={18} />
              </span>
            </Button>

            { <div className={`sideBarNav ${isOpenSideBar===true ?'open' : ''}`}>
              <ul>
                
                <li><Link to="/"><Button>Fashion</Button></Link></li>
                <li><Link to="/"><Button>Electronics</Button></Link></li>
                <li><Link to="/"><Button className=' justify-content-between'>Mobile <FaAngleRight/></Button></Link>

                { <div className='submenu shadow'>
                <Link to="/"><Button>I Phone</Button></Link>
                <Link to="/"><Button>Samsung</Button></Link>
                <Link to="/"><Button>Microsoft</Button></Link>
                <Link to="/"><Button>Vivo</Button></Link>
                <Link to="/"><Button>Oppo</Button></Link>
                <Link to="/"><Button>Nokia</Button></Link>
                <Link to="/"><Button>HTC</Button></Link>
                <Link to="/"><Button>Realme</Button></Link>
                <Link to="/"><Button>Redmi</Button></Link>
                <Link to="/"><Button>Asus</Button></Link>
                <Link to="/"><Button>Honer</Button></Link>
                <Link to="/"><Button>Google</Button></Link>
                <Link to="/"><Button>Blueberry</Button></Link>
                
              </div> }
              </li>



             
                <li><Link to="/"><Button>furniture</Button></Link></li>
                <li><Link to="/"><Button>Two Wheelers</Button></Link></li>
                <li><Link to="/"><Button>Toys</Button></Link></li>
                <li><Link to="/"><Button className=' justify-content-between'>Appliances<FaAngleRight/></Button></Link>


{<div className='submenu shadow'>
<Link to="/"><Button>Washing Mechines</Button></Link>
<Link to="/"><Button>Micro Owen</Button></Link>
<Link to="/"><Button>Refrigerators </Button></Link>
<Link to="/"><Button>Smart Televisions</Button></Link>
<Link to="/"><Button>Air Conditioners</Button></Link>
</div> }

</li>
                <li><Link to="/"><Button>Beauty Products</Button></Link></li>
                <li><Link to="/"><Button>Grocerys</Button></Link></li>



                <div className='extraTab mt-3'>
                <li><Link to="/"><Button className='mt-3' >Offers On The Day</Button></Link></li>
                <li><Link to="/"><Button>Top 100 Products</Button></Link></li>
                <li><Link to="/"><Button>New Arraivals</Button></Link></li>
                </div>
              </ul>

            </div> }

            </div>
          </div>

          {/* Right section */}
          <div className="col-6 col-md-9 navpart2 d-flex align-items-center">
            <ul className="list list-inline d-flex flex-wrap justify-content-end m-0 p-0">
              <li className="list-inline-item px-2"> <Link to="/"><Button>Home</Button></Link></li>


              <li className="list-inline-item px-2"> <Link to="/cat/:1"><Button><GiAmpleDress/>&nbsp;Fashion</Button></Link>
              
              <div className='submenu shadow'>
                <Link to="/"><Button>Clothing</Button></Link>
                <Link to="/"><Button>Footwear</Button></Link>
                <Link to="/"><Button>Watches</Button></Link>
                <Link to="/"><Button>Bags & Suitcase</Button></Link>
                <Link to="/"><Button>Winter</Button></Link>
              </div>
              </li>

              <li className="list-inline-item px-2"> <Link to="/cat/:2"><Button><GiTv/>&nbsp;Electronics</Button></Link>
              
              <div className='submenu shadow'>
                <Link to="/"><Button>Audio</Button></Link>
                <Link to="/"><Button>Gaming</Button></Link>
                <Link to="/"><Button>Laptops & Desktops</Button></Link>
                <Link to="/"><Button>Camera & Accessories</Button></Link>
                <Link to="/"><Button>Smart Hearings</Button></Link>
              </div>
              </li>

              <li className="list-inline-item px-2"> <Link to="/cat/:3"><Button><CiMobile3/>&nbsp;MOBILES</Button></Link>
              
              
              </li>

              <li className="list-inline-item px-2"> <Link to="/cat/:4"><Button><GiWashingMachine/>&nbsp;Appliances</Button></Link>
              </li>

              
              <li className="list-inline-item px-2"> <Link to="/"><Button>Blog</Button></Link></li>
              <li className="list-inline-item px-2"> <Link to="/"><Button>Contact Us</Button></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
