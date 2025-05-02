import React, { useEffect, useState,useContext  } from "react";
import HomeBanner from "../../component/homebanner";
import add from "../../assets/images/animated.gif";
import canvas from "../../assets/images/canvas.gif";
import Button from "@mui/material/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Rating from "@mui/material/Rating";
import Card from "react-bootstrap/Card";
import { GiSelfLove } from "react-icons/gi";
import DialogueEnlarge from "./DialogueEnlarge";
import { Link } from "react-router-dom";
import Axios from "../../component/Axios/Axios";
import { MyContext } from "../../App";


const Home = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHeaderFooterShow(true);
  }, [context]); 


   useEffect(() => {
      context.setIsFooterShow(true);
    }, [context]);
  


  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await Axios.get("/admin/viewproduct", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else if (response.data.products && Array.isArray(response.data.products)) {
          setData(response.data.products);  // Adjust according to API structure
        } else {
          setData([]);
        }
      } catch (error) {
        console.error("Error fetching new products:", error);
        setData([]);
      }
    };
    fetchData();
  }, []);



  
  useEffect(() => {
    const fetchNewData = async () => {
       const token = localStorage.getItem("token");
      try {

        const response = await Axios.get("/admin/viewproduct", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (Array.isArray(response.data)) {
          setNewData(response.data);
        } else if (response.data.products && Array.isArray(response.data.products)) {
          setNewData(response.data.products);  // Adjust according to API structure
        } else {
          setNewData([]);
        }
      } catch (error) {
        console.error("Error fetching new products:", error);
        setNewData([]);
      }
    };
    fetchNewData();
  }, []);

  return (
    <div>
      <HomeBanner />

      <section className="HomeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">
                <img src={add} className="cursor w-100" alt="Ad Banner" />
              </div>
            </div>

            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center justify-content-between">
                <div className="info">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-light text-sml mb-0">
                    Don't miss out on the latest offers!
                  </p>
                </div>

                <Button className="viewAllButton">
                  <span className="view">View All</span> &nbsp;
                  <FaArrowRightLong />
                </Button>
              </div>

              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={-50}
                  pagination={{ clickable: true }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {data.map((item) => (
                    <SwiperSlide key={item.id}>
                      <Card
                        style={{
                          width: "250px",
                          height: "420px",
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
                          <Card.Img className="cardImage"
                            variant="top"
                            src={`http://localhost:3000${item.image[0]}`}
                            style={{
                              maxHeight: "95%",
                              maxWidth: "%",
                              objectFit: "contain",
                            }}
                          />

                          {/* Heart Icon */}
                          <Button
                            style={{
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
                            }}
                          className="heart-icon">
                            <GiSelfLove  style={{ fontSize: "18px" }} />
                          </Button>
                          
                        </div>

                        {/* Card Body */}
                        <Card.Body className="d-flex flex-column justify-content-between">
                          <Card.Title style={{ fontSize: "14px", fontWeight: "bold" }}><Link className="productLink" to="/product/:id">
                            {item.product_name.length > 50 ? item.product_name.slice(0, 50) + "..." : item.product_name}</Link>
                          </Card.Title>

                          <div className="info">
                            <p className="text-success">In Stock</p>
                            <Rating value={item.rating} readOnly size="small" precision={0.5} />
                            <div className="d-flex">
                              <span className="oldPrice"> ₹{Math.round((item.price / 88) * 100)}</span>
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

<div className="banner2 mt-4 ">
                <img src={canvas} className="cursor w-100" alt="Ad Banner" />
              </div>
            <div className="col-md-9 productRow w-100">
              <div className="d-flex align-items-center justify-content-between">
                <div className="info mt-5">
                  <h3 className="mb-0 hd">Suggested For You</h3>
                  <p className="text-light text-sml mb-0">
                  New products with updated stocks.
                  </p>
                </div>

                <Button className="viewAllButton mt-5">
                  <span className="view">View All</span> &nbsp;
                  <FaArrowRightLong />
                </Button>
              </div>

              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={-80}
                  pagination={{ clickable: true }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {newData.map((obj) => (

                    <SwiperSlide key={obj.id}>
                      <Card
                        style={{
                          width: "250px",
                          height: "420px",
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
                          <Card.Img className="cardImage"
                            variant="top"
                            src={`http://localhost:3000${obj.image[0]}`}
                            style={{
                              maxHeight: "95%",
                              maxWidth: "95%",
                              objectFit: "contain",
                            }}
                          />

                          {/* Heart Icon */}
                          <Button
                            style={{
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
                            }}
                          className="heart-icon">
                            <GiSelfLove  style={{ fontSize: "18px" }} />
                          </Button>
                          
                        </div>

                        {/* Card Body */}
                        <Card.Body className="d-flex flex-column justify-content-between">
                          <Card.Title style={{ fontSize: "14px", fontWeight: "bold" }}><Link className="productLink" to="/product/:id">
                          {obj.product_name.length > 50 ? obj.product_name.slice(0, 50) + "..." : obj.product_name}</Link>
                            
                            
                          </Card.Title>

                          <div className="info">
                            <p className="text-success">In Stock</p>
                            <Rating value={obj.rating} readOnly size="small" precision={0.5} />
                           <p> {obj.description.length >30 ?obj.description.slice(0,30)+ "...":obj.description} </p>
                            <div className="d-flex">
                              <span className="oldPrice"> ₹{Math.round((obj.price / 88) * 100)}</span>
                              <span className="newPrice ms-2">₹{obj.price}</span>
                            </div>
                          </div>

                          <Button
                variant="contained"
                sx={{ textTransform: "none", marginTop: "auto" }}
                onClick={() => {
                  setSelectedProduct(obj);
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
      </section>

      {/* Modal Component */}
      {selectedProduct && (
        <DialogueEnlarge
          show={showModal}
          handleClose={() => setShowModal(false)}
          product={selectedProduct}
        />
      )}
      
    </div>
  );
};

export default Home;
