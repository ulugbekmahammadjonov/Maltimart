// import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

// import logo from "../../assets/images/eco-logo.png";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="6" >
            <div className="logo">
              <div>
                <h1 className="text-white">Multimart</h1>
              </div>
            </div>
            <p className="footer_text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              deleniti autem sapiente suscipit magni nihil provident aperiam
              nemo, ullam soluta.
            </p>
          </Col>
          <Col lg="3" md="3">
            <div className="footer_qiuck-links">
              <h4 className="quick_links-title text-white">Top Categories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watch</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3">
            {" "}
            <div className="footer_qiuck-links">
              <h4 className="quick_links-title text-white">Useful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4">
            {" "}
            <div className="footer_qiuck-links">
              <h4 className="quick_links-title text-white">Contact</h4>
              <ListGroup className="footer_contact mb-3">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>123 Amir Temur, Toshkent, Uzbekistan</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>+998 99 1234567</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <span>
                    <i class="ri-mail-fill"></i>
                  </span>
                  <p>example123@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer_copyright">
              Copyright {year} developed by Muhammadjonov Ulug'bek. All rights
              reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
