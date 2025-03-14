import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <footer className="py-5  text-light footer-section " style={{backgroundColor:"oklch(0.21 0.03 263.45 / 1)"}}>
      <Container>
        <Row className="mb-4">
          <Col md={3} className="mb-4 mb-md-0">
            <img 
              src={logo}
              alt="Company Logo"
              width="200"
              height="100"
              className="mb-3"
              style={{backgroundColor:"rgba(52,57,61,1)"}}
            />
          </Col>
          <Col md={2} className="mb-4 mb-md-0">
            <h5 className="text-white main-Heading-footer">Solutions</h5>
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
            <h5 className="text-white main-Heading-footer">Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2 mt-4">
                <a href="#" className="side-Heading-footer">
                  Submit ticket
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
            <h5 className="text-white main-Heading-footer">Company</h5>
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
            <h5 className="text-white main-Heading-footer">Legal</h5>
            <ul className="list-unstyled">
              <li className="mb-2 mt-4">
                <a href="#" className="side-Heading-footer">
                  Terms of service
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="side-Heading-footer">
                  Privacy policy
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
        <Row className="border-top border-secondary pt-4 ">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <h5 className="text-white">Subscribe to our newsletter</h5>
              <p>
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
            </div>
            <div className="footer-email">
              <Form className="d-flex gap-4">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="mr-2 mb-2 mb-sm-0"
                />
                <Button variant="primary" type="submit">
                  Subscribe
                </Button>
              </Form>
            </div>
          </div>
          <div className="border-top border-secondary pt-4 mt-5 d-flex justify-content-between align-items-center">
  <span className="text-secondary">© 2024 Your Company, Inc. All rights reserved.</span>
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
    <a href="#" className="text-light mx-2">
      <i className="fab fa-github"></i>
    </a>
    <a href="#" className="text-light mx-2">
      <i className="fab fa-youtube"></i>
    </a>
  </span>
</div>

        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
