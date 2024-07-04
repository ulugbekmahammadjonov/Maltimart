import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../redux/slice/cartSlice";
const Cart = () => {

  const cartItem = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  const dispatch = useDispatch()

  return <Helmet title="Cart">
    <CommonSection title="Shopping Cart" />

    <section>
      <Container>
        <Row>
          <Col lg="9">

            {
              cartItem.length === 0 ? (<h2 className="fs-4 text-center">No item added to cart</h2>) :
                (<table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qth</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartItem.map((item, index) => (
                        <tr key={index}>
                          <td><img src={item.imgUrl} alt="" /></td>
                          <td>{item.title}</td>
                          <td>${item.price}</td>
                          <td>{item.quantity}px</td>
                          <td><motion.i whileTap={{ scale: 1.2 }} onClick={() => dispatch(cartActions.removeItem(item.id))} className="ri-delete-bin-line"></motion.i></td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>)
            }
          </Col>
          <Col lg="3">
            <div className="calculation">
              <div>
                <h6 className="d-flex align-items-center justify-content-around">Subtotal

                <span className="fs-4 fw-bold">${totalAmount}</span>
                </h6>
              </div>
              <p className="fs-6 mt-2">Taxes and shipping will be calculated at checkout</p>
              <div>
                <button className="buy_btn w-100"><Link to="/shop">Continue shopping </Link></button>
                <button className="buy_btn w-100"><Link to="/checkout">Checkout </Link></button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
};

export default Cart;
