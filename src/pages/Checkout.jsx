import React from "react";
import "../styles/checkout.css";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { useSelector, useDispatch } from "react-redux";
const Checkout = () => {

   const totalQty = useSelector(state => state.cart.totalQuantity)
   const totalAmount = useSelector(state => state.cart.totalAmount)
  return <Helmet title="Checkout">
    <CommonSection title="Checkout" />
    <section>
      <Container>
        <Row>
          <Col lg="8" md="6">
            <h6 className="fw-bold">Billing Information</h6>
            <Form className="billing__form">
              <FormGroup className="form__group">
                <input type="text" placeholder="Enter your Name" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="email" placeholder="Enter your Email" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="number" placeholder="Phone Number" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder="Street Address" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder="City" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder="Country" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder="Postal Code" />
              </FormGroup>
            </Form>
          </Col>
          <Col lg="4" md="6">
            <div className="checkout__cart">
              <h6>
                Total Qty: <span>${totalQty} items</span>
              </h6>
              <h6>
                Subtotal: <span>${totalAmount}</span>
              </h6>
              <h6>
                <span>Shipping: <br /> free shipping</span> <span>$0</span>
              </h6>
             
              <h4>
                Total Cost: <span>${totalAmount}</span>
              </h4>
              <button className="buy_btn auth_btn bg-white">
                Place an order
              </button> 
            
            </div>
           
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>;

};

export default Checkout;
