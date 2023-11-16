"use client";
import { getItemDetails } from "@/redux/item/operetions";
import { selectItemDetails } from "@/redux/item/selectors";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailsImg from "./ProductDetailsImg";
import ProductDetaoilsTitle from "./ProductDetaoilsTitle";
import ProductDetailsInfo from "./ProductDetailsInfo";
import ProductDetailsPrice from "./ProductDetailsPrice";
import ProductAddToFavorite from "./ProductAddToFavorite";
import ProductDetailsCount from "./ProductDetailsCount";
import ProductDetailsBtn from "./ProductDetailsBtn";
import ProductDetailsAddTheIngredients from "./ProductDetailsAddTheIngredients";
import NutritionalValue from "./NutritionalValue";

const ProductDetails = () => {
  const item = useSelector(selectItemDetails);
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [addTheIngredient, setAddTheIngredient] = useState(false);
  const [nutritionalValue, setNutritionalValue] = useState(false);

  useEffect(() => {
    dispatch(getItemDetails(itemId));
  }, [dispatch]);

  return (
    <div className="container py-[32px] relative">
      {item && (
        <div className="flex flex-col gap-[24px]">
          <ProductDetailsImg image={item?.image} nameItem={item?.nameItem} />
          <ProductDetaoilsTitle nameItem={item?.nameItem} />
          <ProductDetailsInfo
            ingredients={item?.ingredients}
            allergens={item?.allergens}
            weight={item?.weight}
          />
          <ProductDetailsPrice price={item?.price} />

          <div className="flex items-center gap-[28px] justify-between">
            <ProductDetailsCount />
            <ProductDetailsBtn />
          </div>
        </div>
      )}
      <ProductAddToFavorite />

      <div className="mt-[32px] flex flex-col gap-[12px]">
        <ProductDetailsAddTheIngredients
          optiosIngredient={item && item?.optiosIngredient}
          addTheIngredient={addTheIngredient}
          setAddTheIngredient={setAddTheIngredient}
        />
        <NutritionalValue
          characteristics={item && item?.characteristics}
                  nutritionalValue={nutritionalValue}
                  setNutritionalValue={setNutritionalValue}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
