import React from 'react';
import sb from "../../assets/images/sb.jpeg"
import moist from "../../assets/images/moist.jpeg"
import redbull from "../../assets/images/redbull.jpeg"
import Rating from "@mui/material/Rating";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { useState } from 'react';
import { IoClose } from "react-icons/io5";

const Cart = () => {

    const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <section className="section_cart">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="hd mb-0">Your Cart</h2>
              <p>
                There are <b>3</b> products in your cart
              </p>

              <div className="table-responsive">
                <table className="table">
                <thead>

                    <tr>
                      <th width="45%">Product</th>
                      <th>Unit Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td >
                        <Link className='productLink' to="/product/1">
                        <div className="d-flex align-items-center cartItemImgWrapper">
                            <div className='imgWrapper'>
                                <img src={sb} alt="redbull" className='w-100'/>

                            </div>
                            <div className="info px-3" style={{fontWeight:"bold"}}>
                                <h6>iuus fviv se p fesjsfddnc uh vdhhjndx </h6>
                                <Rating value={4} readOnly size="small" precision={0.5} />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td>2700</td>


                      <td>
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

                      </td>  



                      <td>2700</td>
                      <td><span className='remove'><IoClose /></span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-md-4"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
