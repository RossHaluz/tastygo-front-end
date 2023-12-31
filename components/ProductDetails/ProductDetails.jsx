"use client";
import { getItemDetails } from "@/redux/item/operetions";
import {
  selectItemDetails,
  selectRecentlyViewedItems,
} from "@/redux/item/selectors";
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
import { v4 as uuidv4 } from "uuid";
import Section from "../Section";
import RecentlyViewed from "../RecentlyViewed/RecentlyViewed";

const ProductDetails = () => {
  const item = useSelector(selectItemDetails);
  const recentlyViewedItems = useSelector(selectRecentlyViewedItems);
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [addTheIngredient, setAddTheIngredient] = useState(false);
  const [nutritionalValue, setNutritionalValue] = useState(false);

  useEffect(() => {
    async function generateUserId() {
      const newUserId = await uuidv4();
      await localStorage.setItem("userId", newUserId);
      return newUserId;
    }

    const userId = generateUserId();

    dispatch(getItemDetails({ itemId, userId }));
  }, [dispatch]);

  return (
    <>
      <Section anotherStyles={"container"}>
        {item && (
          <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-2 lg:gap-[138px] lg:items-start">
            <ProductDetailsImg image={item?.image} nameItem={item?.nameItem} />
            <div>
              <div className="flex flex-col gap-[24px]">
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
          </div>
        )}
      </Section>
      <RecentlyViewed />
    </>
  );
};

export default ProductDetails;
