
import ProductCart from "./ProductCart";

import PropTypes from "prop-types";
const ProductsList = ({ data }) => {
  return (
    <>
      {data?.map((item, index) => {
        return <ProductCart item={item} key={index} />;
      })}
    </>
  );
};
ProductsList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ProductsList;
