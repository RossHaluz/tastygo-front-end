"use client";
import { getAllItems } from "@/redux/item/operetions";
import { selectItems } from "@/redux/item/selectors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MunuProductItem from "./MenuProductItem";

const MenuProducts = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  useEffect(() => {
    dispatch(getAllItems());
  }, [dispatch]);

  return (
    <ul className="grid grid-cols-1 gap-[16px] md:grid-cols-2 md:gap-[24px] lg:grid-cols-3">
      {items?.length > 0 &&
        items?.map((item) => {
          return item && <MunuProductItem item={item} />;
        })}
    </ul>
  );
};

export default MenuProducts;
