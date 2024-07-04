import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";

import products from "../assets/data/products";

import ProductList from "../components/UI/ProductsList";

import "../styles/shop.css";
const Shop = () => {
  const [productsData, setProductsData] = useState(products);

//filter category
  const handleFilter = (e) => {
    const filterValue = e.target.value;
   
    switch (filterValue) {
      case "sofa":
        const filteredProducts = products.filter(
          (item) => item.category === "sofa"
        );
        setProductsData(filteredProducts);

        break;

      case "mobile":
        const filteredProducts2 = products.filter(  
          (item) => item.category === "mobile"
        );
        setProductsData(filteredProducts2);

        break;

      case "chair":
        const filteredProducts3 = products.filter(
          (item) => item.category === "chair"
        );
        setProductsData(filteredProducts3);

        break;



      case "watch":
        const filteredProducts4 = products.filter(
          (item) => item.category === "watch"
        );
        setProductsData(filteredProducts4);

        break;

      case "wireless":
        const filteredProducts5 = products.filter(
          (item) => item.category === "wireless"
        );
        setProductsData(filteredProducts5);

        break;

      default:  
        setProductsData(products);

        break;
    }
  };
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter((item) =>
      item.productName
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
    );
    setProductsData(searchedProducts);
  };

  //sort
  return (
    <div>
      <Helmet title="Shop">
        <CommonSection title="Products" />
        <section>
          <Container>
            <Row>
              <Col lg="3" md="6">
                <div className="filter_widget">
                  <select onChange={handleFilter}>
                    <option>Filter By Category</option>
                    <option value="sofa">Sofa</option>
                    <option value="mobile">Mobile</option>
                    <option value="chair">Chair</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                  </select>
                </div>
              </Col>
              <Col lg="3" md="6" className="text-end">
                <div className="filter_widget">
                  <select>
                    <option>Sort By</option>
                    <option value="sofa">Sofa</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                  </select>
                </div>
              </Col>
              <Col lg="6" md="12">
                <div className="search__box">
                  <input type="text" onChange={handleSearch} placeholder="Search...." />
                  <span>
                    <i class="ri-search-line"></i>
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              {productsData.length === 0 ? (
                <h1 className="text-center">No products are found!</h1>
              ) : (
                <ProductList data={productsData} />
              )}
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  );
};

export default Shop;
