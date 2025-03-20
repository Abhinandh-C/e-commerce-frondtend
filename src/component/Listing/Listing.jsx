import React from "react";
import Sidebar from "../sidebar/Sidebar";
import shoee from "../../assets/images/bannershoe.jpeg";
import { FaListCheck } from "react-icons/fa6";
import { HiViewGridAdd } from "react-icons/hi";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { Button } from "@mui/material";
import { IoMdArrowDropdown } from "react-icons/io";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import ProductsList from "../productList/ProductsList";


const Listing = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const openDropdown = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


  return (
    <div>
      <section className="product_listing">
        <div className="container">
          <div className="productListing d-flex">
            <div className="sidde">
              <Sidebar />
            </div>
            <div className="content_right">
              <img
                className=""
                style={{ height: "250px", width: "85%", borderRadius: "7px" }}
                src={shoee}
                alt="banner"
              />

              <div className="showby mt-4">
                <div className="firstSide">
                  <Button className="bb">
                    <FaListCheck className="sort" />
                  </Button>
                  <Button className="bb">
                    <HiViewGridAdd className="sort" />
                  </Button>
                  <Button className="bb">
                    <BsFillGrid3X3GapFill className="sort" />
                  </Button>
                </div>

                <div className="showNumber">
                  <Button onClick={handleClick} className="showw">
                    Show <span className="num">4</span>
                    <IoMdArrowDropdown style={{ color: "black" }} />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openDropdown}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>4</MenuItem>
                    <MenuItem onClick={handleClose}>8</MenuItem>
                    <MenuItem onClick={handleClose}>16</MenuItem>
                    <MenuItem onClick={handleClose}>32</MenuItem>
                  </Menu>
                </div>
              </div>

              {/* productList */}
<div>
  <ProductsList/>
</div>
             

              {/* productList End Here */}
            </div>
          </div>
        </div>
      </section>

               


    </div>
  );
};

export default Listing;
