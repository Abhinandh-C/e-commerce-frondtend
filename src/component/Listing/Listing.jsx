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
import { useState,useEffect } from "react";



import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Rating from "@mui/material/Rating";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { GiSelfLove } from "react-icons/gi";




const Listing = () => {


  const [anchorEl, setAnchorEl] = useState(null);
  const openDropdown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [data, setData] = useState([]);
   

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching best sellers:", error);
        setData([]);
      }
    };
    fetchData();
  }, []);


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

            <div className="productList">

            <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={20} // Adjusted spacing
                  navigation
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {data.map((item) => (
                    <SwiperSlide key={item.id}>
                      <Card
                        style={{
                          width: "250px",
                          height: "400px",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        {/* Image Container */}
                        <div
                          style={{
                            height: "200px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background: "#f8f9fa",
                            position: "relative",
                          }}
                        >
                          <Card.Img
                            className="cardImage"
                            variant="top"
                            src={item.image}
                            style={{
                              maxHeight: "95%",
                              maxWidth: "95%",
                              objectFit: "contain",
                            }}
                          />

                          {/* Heart Icon */}
                          <Button
                            sx={{
                              position: "absolute",
                              top: "10px",
                              right: "10px",
                              borderRadius: "50%",
                              padding: "5px",
                              minWidth: "unset",
                              width: "30px",
                              height: "30px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
                              textTransform: "none",
                            }}
                            className="heart-icon"
                          >
                            <GiSelfLove style={{ fontSize: "18px" }} />
                          </Button>
                        </div>

                        {/* Card Body */}
                        <Card.Body className="d-flex flex-column justify-content-between">
                          <Card.Title style={{ fontSize: "14px", fontWeight: "bold" }}>
                            {item.title.length > 20 ? item.title.slice(0, 20) + "..." : item.title}
                          </Card.Title>

                          <div className="info">
                            <p className="text-success">In Stock</p>
                            {item.rating && (
                              <Rating value={item.rating.rate} readOnly size="small" precision={0.5} />
                            )}
                            <div className="d-flex">
                              <span className="oldPrice">
                                ₹{Math.round((item.price / 88) * 100)}
                              </span>
                              <span className="newPrice ms-2">₹{item.price}</span>
                            </div>
                          </div>

                          <Button
                            variant="contained"
                            sx={{ textTransform: "none", marginTop: "auto" }}
                            onClick={() => {
                              setSelectedProduct(item);
                              setShowModal(true);
                            }}
                          >
                            Add to Cart
                          </Button>
                        </Card.Body>
                      </Card>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              
            </div>





            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listing;
