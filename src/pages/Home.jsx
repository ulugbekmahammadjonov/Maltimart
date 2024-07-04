import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet";

import { Col, Container, Row } from "reactstrap";

import heroImg from "../assets/images/hero-img.png";
// import counterImg from "../../assets/images/counter-timer-img.png";
import counterImg from "../assets/images/counter-timer-img.png";
import "../styles/home.css";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";

import product from "../assets/data/products";
import Clock from "../components/UI/Clock";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = product.filter((item) => {
      return item.category === "chair";
    });

    const filteredBestSalesProducts = product.filter((item) => {
      return item.category === "sofa";
    });
    const filteredMobileProducts = product.filter((item) => {
      return item.category === "mobile";
    });
    const filteredWirelessProducts = product.filter((item) => {
      return item.category === "wireless";
    });
    const filteredPopularProducts = product.filter((item) => {
      return item.category === "watch";
    });

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  return (
    <div>
      <Helmet title={"Home"}>
        <section className="hero_section">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="hero_content">
                  <p className="hero_subtitle">Trending product in {year}</p>
                  <h2>Make Your Interior Minimalistic Modern</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    vel, dolorum sapiente eum sit repellat saepe maiores nulla
                    deleniti error?
                  </p>
                  <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                    <Link to="/shop">SHOP NOW</Link>
                  </motion.button>
                </div>
              </Col>
              <Col lg="6" md="6" >
                <div className="hero_img">
                  <img src={heroImg} alt="heroImg" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Services />
        <section className="trending__product">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="section_title">Trending Product</h2>
              </Col>
              <ProductsList data={trendingProducts} />
            </Row>
          </Container>
        </section>
        <section className="best_sales">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="section_title">Best Sales</h2>
              </Col>
              <ProductsList data={bestSalesProducts} />
            </Row>
          </Container>
        </section>
        <section className="count_timer">
          <Container>
            <Row>
              <Col lg="6" md="12" className="count_down_col">
                <div className="clock_top-content">
                  <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                  <h3 className="text-white fs-5 mb-3">Quelty Armchair</h3>
                </div>
                <Clock />
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy_btn store_btn"
                >
                  <Link to="/shop">Visit Store</Link>
                </motion.button>
              </Col>
              <Col lg="6" md="12" className="text-end counter_img">
                <img src={counterImg} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="new_arrivals">
          <Container>
            <Row>
              <Col lg="12" className="text-center mb-5">
                <h2 className="section_title">New Arrivals</h2>
              </Col>
              <ProductsList data={mobileProducts} />
              <ProductsList data={wirelessProducts} />
            </Row>
          </Container>
        </section>
        <section className="popular_category">
          <Container>
            <Row>
              <Col lg="12" className="text-center mb-5">
                <h2 className="section_title">Popular in Category</h2>
              </Col>
              <ProductsList data={popularProducts} />
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  );
};

export default Home;
