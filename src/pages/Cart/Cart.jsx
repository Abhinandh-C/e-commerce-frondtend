import React from "react";
import { MyContext } from "../../App";
import sb from "../../assets/images/sb.jpeg";
import moist from "../../assets/images/moist.jpeg";
import redbull from "../../assets/images/redbull.jpeg";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState,useContext ,useEffect } from "react";
import { IoClose } from "react-icons/io5";


const Cart = () => {

  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHeaderFooterShow(false);
  }, [context]);





  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <section className="section_cart">
        <div className="container mt-5">
        <h2 className="hd mb-1">Your Cart</h2>
              <p>
                There are <b>3</b> products in your cart
              </p>
          <div className="row ">
            <div className="col-md-8">
            

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
                      <td>
                        <Link className="productLink" to="/product/1">
                          <div className="d-flex align-items-center cartItemImgWrapper">
                            <div className="imgWrapper">
                              <img src={sb} alt="redbull" className="w-75" />
                            </div>
                            <div
                              className="info px-3"
                              style={{ fontWeight: "bold" }}
                            >
                              <h6>iuus fviv se p fesjsfddnc uh vdhhjndx </h6>
                              <Rating
                                value={4}
                                readOnly
                                size="small"
                                precision={0.5}
                              />
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
                      <td>
                        <span className="remove">
                          <IoClose />
                        </span>
                      </td>
                    </tr>






                    {/*  */}
                    <tr>
                      <td>
                        <Link className="productLink" to="/product/1">
                          <div className="d-flex align-items-center cartItemImgWrapper">
                            <div className="imgWrapper">
                              <img src={redbull} alt="redbull" className="w-75" />
                            </div>
                            <div
                              className="info px-3"
                              style={{ fontWeight: "bold" }}
                            >
                              <h6>iuus fviv se p fesjsfddnc uh vdhhjndx </h6>
                              <Rating
                                value={4}
                                readOnly
                                size="small"
                                precision={0.5}
                              />
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
                      <td>
                        <span className="remove">
                          <IoClose />
                        </span>
                      </td>
                    </tr>

                    {/*  */}





                    <tr>
                      <td>
                        <Link className="productLink" to="/product/1">
                          <div className="d-flex align-items-center cartItemImgWrapper">
                            <div className="imgWrapper">
                              <img src={moist} alt="redbull" className="w-75" />
                            </div>
                            <div
                              className="info px-3"
                              style={{ fontWeight: "bold" }}
                            >
                              <h6>iuus fviv se p fesjsfddnc uh vdhhjndx </h6>
                              <Rating
                                value={4}
                                readOnly
                                size="small"
                                precision={0.5}
                              />
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
                      <td>
                        <span className="remove">
                          <IoClose />
                        </span>
                      </td>
                    </tr>

                    {/*  */}




                  
                  </tbody>
                </table>
              </div>

              <div className="cartEnd">
                <div>
                <input className="couponInput" type="text"  placeholder="Coupon Code"/>
                <Button className="couponButton ms-2">Apply Coupon</Button>
                </div>
                <div>
                <Button className="couponButtonn">Remove All</Button>
                </div>
              </div>



            </div>

            <div className="col-md-4">
                <div className="cart border p-3 cartDetails">
                    <h4>CART TOTALS</h4>
                <div className="cartTotal">
                    <span>Subtotal</span>
                    <span>₹10000</span>
                </div>
                <div className="cartTotal">
                    <span>Discount</span>
                    <span style={{color:"#3a8f3e"}}>-₹1000</span>
                </div>
                <div className="cartTotal">
                    <span>Platform Fee</span>
                    <span>₹5</span>
                </div>
                <div className="cartTotal">
                    <span>Delivery Charges</span>
                    <div>
                    <span className="free">80</span>
                    <span style={{color:"#3a8f3e"}}>Free</span>
                    </div>
                </div>
                <div className="amountTotal">
                    <span>Total Amount</span>
                    <span style={{color:"red"}}>₹8995</span>
                </div>
<div>
<Button className="cartButton"
               
              >
                Procced to checkout
              </Button>
</div>



                </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
