import React from 'react';
import { Button } from '@mui/material';
import { IoMdMenu } from 'react-icons/io';
import { FaAngleDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="row align-items-center">
          {/* Left section */}
          <div className="col-6 col-md-3 navpart1">
            <Button className="allcartTab d-flex align-items-center">
              <span className="icon me-2">
                <IoMdMenu size={24} />
              </span>
              <span className="text d-none d-md-inline">ALL CATEGORIES</span>
              <span className="icon2 ms-2">
                <FaAngleDown size={18} />
              </span>
            </Button>
          </div>

          {/* Right section */}
          <div className="col-6 col-md-9 navpart2 d-flex align-items-center">
            <ul className="list list-inline d-flex flex-wrap justify-content-end m-0 p-0">
              <li className="list-inline-item px-2"> <Link to="/">Home</Link></li>
              <li className="list-inline-item px-2"> <Link to="/">Fashion</Link></li>
              <li className="list-inline-item px-2"> <Link to="/">Electronics</Link></li>
              <li className="list-inline-item px-2"> <Link to="/">MOBILES</Link></li>
              <li className="list-inline-item px-2"> <Link to="/">Appliances</Link></li>
              <li className="list-inline-item px-2"> <Link to="/">Blog</Link></li>
              <li className="list-inline-item px-2"> <Link to="/">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
