import { motion } from "framer-motion";
import "../../styles/product-cart.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slice/cartSlice";

import { toast } from "react-toastify";

import PropTypes from "prop-types";

const ProductCart = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        imgUrl: item.imgUrl,
        price: item.price,
      })
    );
    toast.success("Product added successfully");
    // alert("Product added to cart");
  };
  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product_item">
        <div>
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
        </div>
        <div className="p-2 product_info">
          <h3 className="product_name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};
ProductCart.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    productName: PropTypes.string,
    imgUrl: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string, // Add this line for category validation
  }).isRequired,
};

export default ProductCart;
