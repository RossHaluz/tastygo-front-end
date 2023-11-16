import React from "react";

const ProductDetailsInfo = ({ ingredients, weight, allergens }) => {
  const allergensParse = JSON.parse(allergens);
  const lastItem = allergensParse.length - 1;

  return (
    <div className="flex flex-col gap-[16px]">
      <h3 className="text-[16px]">
        <span className="font-medium leading-[19.2px]">Weight: </span>
        {weight}
      </h3>

      <p className="text-[16px]">
        <span className="font-medium leading-[19.2px]">Ingredients:</span>
        {ingredients}
      </p>

      <p className="text-[16px] lowercase">
        <span className="normal-case font-medium leading-[19.2px]">
          Allergens:
        </span>
        {allergensParse.map((item, idx) =>
          lastItem === idx ? ` ${item} ` : ` ${item}, `
        )}
      </p>
    </div>
  );
};

export default ProductDetailsInfo;
