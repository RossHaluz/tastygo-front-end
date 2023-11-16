import React from "react";

const ProductDetailsPrice = ({ price }) => {
  return (
    <h3 className="text-[32px] font-medium leading-[38.4px] md:text-[40px] md:leading-[48px]">
      ${price}
    </h3>
  );
};

export default ProductDetailsPrice;
