"use client";
import Plus from "../../public/images/count/plus/plus.svg";
import Minus from "../../public/images/count/minus/minus.svg";
import clsx from "clsx";
import { useRef } from "react";

const ProductDetailsAddTheIngredients = ({
  optiosIngredient,
  addTheIngredient,
  setAddTheIngredient,
}) => {
  const optiosIngredientParse = JSON.parse(optiosIngredient);

  return (
    <div
      className={clsx("bg-[#F6F6F6] rounded-[20px]", {
        "py-[24px] px-[16px]": addTheIngredient === true,
        "px-[24px] py-[10.5px]": addTheIngredient === false,
      })}
    >
      <div className="flex flex-col gap-[16px]">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-medium leading-[19.2px]">
            Add the ingredients
          </h3>
          {addTheIngredient ? (
            <button
              type="button"
              onClick={() => setAddTheIngredient((prev) => !prev)}
            >
              <Minus className="w-[24px] h-[24px]" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setAddTheIngredient((prev) => !prev)}
            >
              <Plus className="w-[24px] h-[24px]" />
            </button>
          )}
        </div>

        {addTheIngredient && (
          <div className="flex flex-col gap-[12.5px]">
            {optiosIngredientParse?.map(({ option }) => {
              return (
                <label class="flex gap-[12px] items-center" key={option}>
                  <input
                    type="checkbox"
                    class="appearance-none relative w-[16px] h-[16px] border border-solid border-[#010101] checked:before:content-[''] checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2  checked:before:w-[11px] checked:before:h-[11px] checked:before:bg-[#010101]"
                  />
                  <span class="ml-1 text-[16px]">{option}</span>
                </label>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsAddTheIngredients;
