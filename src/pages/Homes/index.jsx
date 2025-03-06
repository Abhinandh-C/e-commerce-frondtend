import React from "react";
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

const Home = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

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
                          src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
                          style={{
                            maxHeight: "100%",
                            maxWidth: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Rating name="read-only" value={5} readOnly size="small"precision={0.5} />
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
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
