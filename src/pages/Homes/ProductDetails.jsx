import React from "react";
import shoe from "../../assets/images/product.shoe.jpeg";
import Rating from "@mui/material/Rating";
import { Button } from "react-bootstrap";
import { PiShoppingCartSimple } from "react-icons/pi";
import { FaHeart, FaBalanceScale } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { Link } from "react-router-dom";

import { useState } from "react";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <section className="productDetails_section">
        <div className="container detailing_Container">
          <div className="row">
            <div className="col-md-4">
              <img
                style={{ width: "85%", height: "85%", borderRadius: "5px" }}
                src={shoe}
                alt="shoe"
              />
            </div>

            <div className="col-md-7 ">
              <h2 className="details_heading hd text-capitalize">
                Nike Air Jordan 5 Retro Racer Blue Black White....
              </h2>

              <ul className="list list-inline d-flex align-items-center">
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <span className="text-light">Brands:&nbsp;</span>
                    <span>Nike</span>
                  </div>
                </li>
                <li className="list-inline-item ">
                  <div className="d-flex align-items-center">
                    <Rating
                      name="read-only"
                      value={4.5}
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
                  ₹{Math.round((100 / 88) * 100)}
                </span>
                <span className="newPriceProduct ms-2">₹100</span>
              </div>
              <button className="bg">IN STOCK</button>

              <p className="mt-3">
                Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
                malesuada tincidunt. Class aptent taciti sociosqu ad litora
                torquent Vivamus adipiscing nisl ut dolor dignissim semper.
                Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu
                ad litora torquent{" "}
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

                <Link to="/cart"> <Button className="product_cart">
                  {" "}
                  <PiShoppingCartSimple /> Add To Cart
                </Button></Link>
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
                    <li><MdOutlineDone className="tickmark" />&nbsp;Type: Shoe</li>
                    <li><MdOutlineDone className="tickmark" />&nbsp;MFG: Jun 4.2025</li>
                    <li><MdOutlineDone className="tickmark"  />&nbsp;LIFE: 3-4 Years</li>
                    
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
