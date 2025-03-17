import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import logo from '../../assets/images/logo.png'
import { MdOutlinePriceChange } from "react-icons/md";
import { RiDiscountPercentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiPhoneCallThin } from "react-icons/pi";

const Footer = () => {
  return (
    <>
    <div className="d-flex  align-items-center emailNews">
    <div className="d-flex flex-column">
      <h5 className="text-white mb-3" style={{fontWeight:"600",fontSize:"28px"}}>Subscribe to our newsletter</h5>
    
      <p className="text mb-1"style={{color:"#8a96c6"}}>
      Join our email subscription now to get updates
      </p>
      <p className="text mt-0"style={{color:"#8a96c6"}}>
      on promotions and coupons.
      </p>
    </div>
    <div className="footer-email">
      <Form className="d-flex gap-2">
        <Form.Control
          type="email"
          placeholder="Enter Your Email"
          className="mr-2 mb-2 mb-sm-0"
          
        />
        <Button variant="primary" type="submit">
          Subscribe
        </Button>
        
      </Form>
    </div>
    <img className="sub " src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/coupon.png" alt="sub" />
  </div>



{/* some usuall things */}

<div className="details-footer ">

<h4 className="detail-head"><IoFastFoodOutline/>Everyday fresh products</h4>
<h4 className="detail-head ml-2"><TbTruckDelivery/>Free delivery for order over $400</h4>
<h4 className="detail-head"><RiDiscountPercentLine/> Daily Mega Discounts</h4>
<h4 className="detail-head"style={{border:"none"}}><MdOutlinePriceChange/> Best price on the market</h4>


</div>



  
    <footer className=" text-light  footer-section " style={{backgroundColor:"#f7f8fd"}}>
      <Container className=" py-5 border-top   ">
     
        <Row className="mb-4 ">
          <Col md={3} className="mb-4 mb-md-0">
            <img 
              src={logo}
              alt="Company Logo"
              width="200"
              height="100"
              className="mb-3"
          
            />
          </Col>
          <Col md={2} className="mb-4 mb-md-0">
            <h5 className=" main-Heading-footer">SOLUTIONS</h5>
            <ul className="list-unstyled">
              <li className="mb-2 mt-4">
                <a href="#" className="side-Heading-footer">
                  Marketing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="side-Heading-footer">
                  Analytics
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="side-Heading-footer">
                  Automation
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="side-Heading-footer">
                  Commerce
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="side-Heading-footer">
                  Insights
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2} className="mb-4 mb-md-0">
            <h5 className=" main-Heading-footer">SUPPORT</h5>
            <ul className="list-unstyled">
              <li className="mb-2 mt-4">
                <a href="#" className="side-Heading-footer">
                  Submit Ticket
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="side-Heading-footer">
                  Documentation
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="side-Heading-footer">
                  Guides
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2} className="mb-4 mb-md-0">
            <h5 className=" main-Heading-footer">COMPANY</h5>
            <ul className="list-unstyled">
              <li className="mb-2 mt-4">
                <a href="#" className="side-Heading-footer">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="side-Heading-footer">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="side-Heading-footer">
                  Jobs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="side-Heading-footer">
                  Press
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2} className="mb-4 mb-md-0">
            <h5 className="main-Heading-footer">LEGAL</h5>
            <ul className="list-unstyled">
              <li className="mb-2 mt-4">
                <a href="#" className="side-Heading-footer">
                  Terms Of Service
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="side-Heading-footer">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="side-Heading-footer">
                  License
                </a>
              </li>
            </ul>
          </Col>
        </Row>
       
      </Container>
    </footer>
   <Container>
   <Row className="pt-4 " style={{background:"white"}}>

    <div className="contact d-flex justify-content-between">
      <div className="number d-flex">
        <button className="call-button "><PiPhoneCallThin/></button>
        <div >
        <h4 className="phonenumber">080-817-9967</h4> 
        <p className="working">working 10:00 - 6:00</p>
        </div>
        
      </div>
      <div className="online">
        <div>
        <h6 className="dowwn-conttt">Download App on Mobile :</h6>
        <p  className="conttt">15% discount on your first purchase</p>
        </div>
        <img className="cc " src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/google-play.png" alt="appstore" />

        <img className="cc" src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/app-store.png" alt="apple" />
        
        <span>
          <a href="#" className="text-light mx-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-light mx-2">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-light mx-2">
            <i className="fab fa-x-twitter"></i>
          </a>
        </span>
      </div>

    </div>
        
         
       
      
      
              </Row>
   </Container>
    </>
  );
};

export default Footer;
