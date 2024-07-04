import React, { useRef, useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import ProductsList from "../components/UI/ProductsList";
import { Col, Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slice/cartSlice";
import { useDispatch } from "react-redux";
import { toast   } from "react-toastify";
import "../styles/product-detail.css";


export const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === id);

  const reviewUser = useRef("");
  
  const reviewMsg = useRef("");

  const dispatch = useDispatch();

 
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    category,
    shortDesc,
  } = product;

  const [tab, setTab] = useState("desc");

  const [rating, setRating] = useState(null);

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;  
    const reviewObj = {
      user: reviewUserName,
      text: reviewUserMsg,
      rating,
    }
    toast.success("Review submitted")
    console.log(reviewObj)
  }

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        productName: product.productName,
        imgUrl: product.imgUrl,
        price: product.price,
      })
    );

    toast.success("Product added successfully");
  }
  useEffect(() => {
    window.scrollTo(0, 0);

  }, [product]);
  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} className="product_img w-100" alt="" />
            </Col>
            <Col lg="6">
              <div className="product_details">
                <h2>{productName}</h2>

                <div className="product_rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-half-s-line"></i>
                    </span>
                  </div>
                  <p className="mb-0">
                    (<span>{avgRating}</span>ratings)
                  </p>
                </div>

                <div className="d-flex align-items-center gap-5">
                  <span className="product__price">${price}</span>
                  <span>Category: {category.toUpperCase()}</span>
                </div>

                <p className="mt-3">{shortDesc}</p>
              </div>
              <motion.button whileTap={{ scale: 1.2 }} className="buy_btn" onClick={addToCart}>
                Add to Cart
              </motion.button>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab_wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active_tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active_tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Review ({reviews.length})
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab_content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product_review mt-5">
                  <div className="review_wrapper">
                    <ul>
                      {reviews.map((item, index) => (
                        <li key={index}>
                          <h6>{item.name}</h6>
                          <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="review_form">
                      <form action="" onSubmit={submitHandler}>
                        <h4>Leave your review</h4>
                        <div className="form_group">
                          <input type="text" placeholder="Enter Name"  ref={reviewUser} required/>
                        </div>
                          <div className="form_group rating_group d-flex align-items-center rating_group" >
                            <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(1)}>1<i className="ri-star-s-fill"></i></motion.span>
                            <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(2)}>2<i className="ri-star-s-fill"></i></motion.span>
                            <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(3)}>3<i className="ri-star-s-fill"></i></motion.span>
                            <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(4)}>4<i className="ri-star-s-fill"></i></motion.span>
                            <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(5)}>5<i className="ri-star-s-fill"></i></motion.span>
                          
                          </div>
                        
                        <div className="form_group">
                          <textarea
                            rows={4}
                            type="text"
                            placeholder="Review Message"
                            ref={reviewMsg}
                            required
                          ></textarea>
                        </div>
                        <motion.button whileTap={{ scale: 1.2 }} type="submit" className="buy_btn">
                          Submit
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg="12" className="mt-5">
              <h2 className="related_title">You might also like</h2> 
            </Col>
             <ProductsList data={relatedProducts} />
             
            
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;