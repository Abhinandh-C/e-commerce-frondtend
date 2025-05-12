import React from "react";
import { useState, useEffect,useContext  } from "react";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import Card from "react-bootstrap/Card";
import Axios from "../Axios/Axios";
import { GiSelfLove } from "react-icons/gi";
import DialogueEnlarge from "../../pages/Homes/DialogueEnlarge";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";

const ProductsList = (props) => {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchNewData = async () => {
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
    fetchNewData();
  }, []);


  
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHeaderFooterShow(true);
  }, [context]); 


   useEffect(() => {
      context.setIsFooterShow(true);
    }, [context]);
  




  const description =localStorage.setItem("productView",JSON.stringify(props.itemView))
   
  const getDescription =JSON.parse(localStorage.getItem("productView"))
  
  



  return (
    <div className="productIn  mt-4 " style={{maxWidth:"800px"}}>
      <div className="row row-cols-2 row-cols-md-3" style={{gap:"30px"}}>
        {data.slice(0, 12).map((item) => (
          <Card
            className={`productItem ${props.itemView}`}
            key={item.id}
            style={{
              width: "250px",
              height: "450px",

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
                className={getDescription === 'one' ? "imegeOne" : "normalImage"}
                variant="top"
                src={`http://localhost:3000${item.image[0]}`}
                
                style={{
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
              <Card.Title style={{ fontSize: "14px", fontWeight: "bold" }}><Link className="productLink" to={`/product/${item._id}`}>
                {item.product_name} </Link>
                  
                 
              </Card.Title>

              <div style={{overflowY:"auto"}}>
              {getDescription=="one" && item.description}
             </div>

             
              <div className="info">
                <p className="text-success">In Stock</p>
                {item.rating && (
                  <Rating
                    value={item.rating}
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

export default ProductsList;
