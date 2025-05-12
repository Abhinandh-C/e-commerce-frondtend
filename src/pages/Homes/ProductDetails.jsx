import React from "react";
import shoe from "../../assets/images/product.shoe.jpeg";
import Rating from "@mui/material/Rating";
import { Button } from "react-bootstrap";
import { PiShoppingCartSimple } from "react-icons/pi";
import { FaHeart, FaBalanceScale } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "../../component/Axios/Axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await Axios.get(`/admin/viewproduct/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProduct(response.data);
        console.log("the data that has been given", response.data);
        console.log("the data ", product);
       
      } catch (error) {
        console.error(
          "Error fetching product details:",
          error.response || error.message
        );
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>

      {product !== null && (
  <section className="productDetails_section">
    <div className="container detailing_Container">
      <div className="row">
        <div className="col-md-4">
          
            <img
              style={{ width: "85%", height: "85%", borderRadius: "5px" }}
              src={`http://localhost:3000${product.image[0]}`}
              alt={product.product_name || "product"}
            />
          
        </div>

        <div className="col-md-7 ">
          <h2 className="details_heading hd text-capitalize">
            {product.product_name}....
          </h2>

          <ul className="list list-inline d-flex align-items-center">
            <li className="list-inline-item">
              <div className="d-flex align-items-center">
                <span className="text-light">Category:&nbsp;</span>
                <span>{product.category}</span>
              </div>
            </li>
            <li className="list-inline-item ">
              <div className="d-flex align-items-center">
                <Rating
                  name="read-only"
                  value={product.rating}
                  precision={0.5}
                  size="small"
                  readOnly
                />
                <span className="text-light rate">215 Reviews</span>
              </div>
            </li>
          </ul>

          <div className="d-flex info mb-3">
            <span className="oldprice">
              ₹{Math.round((product.price / 88) * 100)}
            </span>
            <span className="newPriceProduct ms-2">₹{product.price}</span>
          </div>
          <button className="bg">IN STOCK</button>

          <p className="mt-3">
            {product.description}
          </p>

          <div className="align-items-center mb-4">
            <Button
              variant="outline-secondary"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </Button>
            <span className="mx-2">{quantity}</span>
            <Button
              variant="outline-secondary"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>

            <Link to="/cart">
              <Button className="product_cart">
                <PiShoppingCartSimple /> Add To Cart
              </Button>
            </Link>
          </div>

          <div className="align-items-center mb-4">
            <Button variant="outline-secondary wish">
              <FaHeart /> Add to Wishlist
            </Button>
            <Button variant="outline-secondary wishh" className="ms-2">
              <FaBalanceScale /> Compare
            </Button>
          </div>

          <div className="align-items-center lastList mb-4">
            <ul>
              <li>
                <MdOutlineDone className="tickmark" />
                &nbsp;Type: {product.category}
              </li>
              <li>
                <MdOutlineDone className="tickmark" />
                &nbsp;MFG: Jun 4.2025
              </li>
              <li>
                <MdOutlineDone className="tickmark" />
                &nbsp;LIFE: 3-4 Years
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
)}

    </div>
  );
};

export default ProductDetails;
