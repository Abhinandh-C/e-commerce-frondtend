import React, { useState, useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import Axios from "../../component/Axios/Axios";
import { notifySuccess, notifyError } from "../../component/utilities/utilities";

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHeaderFooterShow(false);
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await Axios.get("/viewcart", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200 && response.data.cart) {
        setCarts(response.data.cart);
        console.log(response.data.cart);
        
      }
    } catch (err) {
      console.error("Error fetching cart items:", err);
    }
  };

  const deleteCartItem = async (productId) => {
    const token = localStorage.getItem("token");

    try {
      await Axios.delete(`/removefromcart/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      notifySuccess("Item removed from cart");
      fetchCartItems();
    } catch (error) {
      console.error("Delete error:", error);
      notifyError("Failed to delete item");
    }
  };

  const removeAllCartItem =async()=>{
    const token = localStorage.getItem("token");
  
  try {
    await Axios.delete('/removeAllCart',{
      headers:{Authorization:`Bearer ${token}`},
    });
    notifySuccess(" All Item removed from cart");
      fetchCartItems()
    
  } catch (error) {
    console.error("Delete error:", error);
    notifyError("Failed to delete item");
  }
}

  const handleQuantityChange = async (id, currentQty, change) => {
    const newQty = Math.max(1, parseInt(currentQty) + change);
    const token = localStorage.getItem("token");

    try {
      await Axios.put(`/updatecart/${id}`, { quantity: newQty }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      notifySuccess("Quantity updated");
      fetchCartItems();
    } catch (error) {
      console.error("Update error:", error);
      notifyError("Failed to update quantity");
    }
  };

  return (
    <div>
      <section className="section_cart">
        <div className="container mt-5">
          <h2 className="hd mb-1">Your Cart</h2>
          <p>There are <b>{carts.length}</b> products in your cart</p>
          <div className="row">
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
                    {carts?.products?.map(cart => (
                      <tr key={cart._id}>
                        <td>
                          <Link className="productLink" to="/product/1">
                            <div className="d-flex align-items-center cartItemImgWrapper">
                              <div className="imgWrapper">
                                <img
                                  src={`http://localhost:3000${cart.productid.image[0]}`}
                                  alt={cart.title}
                                  className="w-50"
                                />
                              </div>
                              <div className="info px-3" style={{ fontWeight: "bold" }}>
                                <h6>{cart.productid.product_name}</h6>
                                <Rating value={cart.productid.rating} readOnly size="small" precision={0.5} />
                              </div>
                            </div>
                          </Link>
                        </td>
                        <td>{cart.price}</td>
                        <td>
                          <Button
                            variant="outline-secondary"
                            onClick={() => handleQuantityChange(cart.productid._id, cart.quantity, -1)}
                          >
                            -
                          </Button>
                          <span className="mx-2">{cart.quantity}</span>
                          <Button
                            variant="outline-secondary"
                            onClick={() => handleQuantityChange(cart.productid._id, cart.quantity, +1)}
                          >
                            +
                          </Button>
                        </td>
                        <td>{cart.price * cart.quantity}</td>
                        <td>
                          <span onClick={() => deleteCartItem(cart.productid._id)} className="remove">
                            <IoClose />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="cartEnd">
                <div>
                  <input className="couponInput" type="text" placeholder="Coupon Code" />
                  <Button className="couponButton ms-2">Apply Coupon</Button>
                </div>
                <div>
                  <Button className="couponButtonn"onClick={removeAllCartItem}>Remove All</Button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
             
                <div className="cart border p-3 cartDetails">
                <h4>CART TOTALS</h4>
                <div className="cartTotal">
                  <span>Subtotal</span>
                  <span>₹{carts?.Netamount}</span>
                </div>
                <div className="cartTotal">
                  <span>Discount</span>
                  <span style={{ color: "#3a8f3e" }}>-₹100</span>
                </div>
                <div className="cartTotal">
                  <span>Platform Fee</span>
                  <span>₹5</span>
                </div>
                <div className="cartTotal">
                  <span>Delivery Charges</span>
                  <div>
                    <span className="free">80</span>
                    <span style={{ color: "#3a8f3e" }}>Free</span>
                  </div>
                </div>
                <div className="amountTotal">
                  <span>Total Amount</span>
                  <span style={{ color: "red" }}>{carts?.Netamount -100 +5}</span>
                </div>
                <div>
                  <Button className="cartButton">Proceed to Checkout</Button>
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
