"use client";
import Plus from "../../public/images/count/plus/plus.svg";
import Minus from "../../public/images/count/minus/minus.svg";
import clsx from "clsx";

const ProductDetailsAddTheIngredients = ({
  optiosIngredient,
  addTheIngredient,
  setAddTheIngredient,
}) => {
  const optiosIngredientParse = JSON.parse(optiosIngredient);

  return (
    <button
      type="button"
      className={clsx("bg-[#F6F6F6] rounded-[20px]", {
        "py-[24px] px-[16px]": addTheIngredient === true,
        "px-[24px] py-[10.5px]": addTheIngredient === false,
      })}
      onClick={() => setAddTheIngredient((prev) => !prev)}
    >
      <div className="flex flex-col gap-[16px]">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-medium leading-[19.2px]">
            Add the ingredients
          </h3>
          {addTheIngredient ? (
            <Minus className="w-[24px] h-[24px]" />
          ) : (
            <Plus className="w-[24px] h-[24px]" />
          )}
        </div>
      </div>
    </button>
  );
};

export default ProductDetailsAddTheIngredients;
