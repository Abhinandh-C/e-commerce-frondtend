import React from 'react'
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { GiSelfLove } from "react-icons/gi";
import DialogueEnlarge from "../../pages/Homes/DialogueEnlarge"

const ProductsList = () => {



  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
   const [showModal, setShowModal] = useState(false);

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
       <div className="productItems">
                <div
                  className="product_row w-100 mt-4 d-flex flex-wrap"
                  style={{ gap: "20px" }} // Added spacing
                >
                  {data.slice(0, 12).map((item) => (
                    <Card
                      key={item.id}
                      style={{
                        width: "250px",
                        height: "400px",
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: "20px", // Space at bottom
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
                        <Card.Title
                          style={{ fontSize: "14px", fontWeight: "bold" }}
                        >
                          {item.title.length > 20
                            ? item.title.slice(0, 20) + "..."
                            : item.title}
                        </Card.Title>

                        <div className="info">
                          <p className="text-success">In Stock</p>
                          {item.rating && (
                            <Rating
                              value={item.rating.rate}
                              readOnly
                              size="small"
                              precision={0.5}
                            />
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
                  ))}
                </div>
              </div>
              {selectedProduct && (
                          <DialogueEnlarge
                            show={showModal}
                            handleClose={() => setShowModal(false)}
                            product={selectedProduct}
                          />
                        )}

    </div>
  )
}

export default ProductsList
