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
// import Button  from "react-bootstrap/Button";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const url = "https://fakestoreapi.com/products";
  const fetchData = async () => {
    const response = await axios.get(url);
    setData(response.data);
    console.log(response.data);
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
                <img src={add} className="cursor w-100" />
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

                <Button className="viewAllButton ">
                  <span className="view ">View All</span> &nbsp;
                  <FaArrowRightLong />
                </Button>
              </div>

              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    {data.map((item) => (
                      <div key={item.id} className="d-flex flex-row">
                        <Card style={{ width: "18rem" }}>
                        
                      <div
                        style={{
                          height: "200px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          background: "#f8f9fa",
                        }}
                      >
                        <Card.Img
                          variant="top"
                          src={item.
                            image
                            }
                          style={{
                            maxHeight: "100%",
                            maxWidth: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        
                        <div className="info">
                          <p className="text-success d-block">In Stock</p>

                          <Rating
                            name="read-only "
                            value={item.rating
                            }
                            readOnly
                            size="small"
                            precision={0.5}
                          />
                          <div className="d-flex  ">
                            <span className="oldPrice">$9.6</span>
                            <span className="newPrice ms-2">{item.price}</span>
                          </div>
                        </div>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                    </div>
                    ))}
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
