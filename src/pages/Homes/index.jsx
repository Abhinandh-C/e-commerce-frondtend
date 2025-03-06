import React, { useEffect, useState } from "react";
import HomeBanner from "../../component/homebanner";
import add from "../../assets/images/animated.gif";
import Button from "@mui/material/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Rating from "@mui/material/Rating";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { GiSelfLove } from "react-icons/gi";
import DialogueEnlarge from "./DialogueEnlarge";


const Home = () => {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const url = "https://fakestoreapi.com/products";
  const fetchData = async () => {
    const response = await axios.get(url);
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
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
                  spaceBetween={-180}
                  pagination={{ clickable: true }}
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
                            variant="top"
                            src={item.image}
                            style={{
                              maxHeight: "100%",
                              maxWidth: "100%",
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
                          <Card.Title style={{ fontSize: "14px", fontWeight: "bold" }}>
                            {item.title.length > 20 ? item.title.slice(0, 20) + "..." : item.title}
                          </Card.Title>

                          <div className="info">
                            <p className="text-success">In Stock</p>
                            <Rating value={item.rating.rate} readOnly size="small" precision={0.5} />
                            <div className="d-flex">
                              <span className="oldPrice"> ₹{Math.round((item.price / 88) * 100)}</span>
                              <span className="newPrice ms-2">₹{item.price}</span>
                            </div>
                          </div>

                          <Button
                            variant="primary"
                            className="mt-auto"
                            onClick={() => {
                              setSelectedProduct(item);
                              setShowModal(true);
                            }}
                          >
                            <span className="addTocart"> Add to Cart</span>
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
