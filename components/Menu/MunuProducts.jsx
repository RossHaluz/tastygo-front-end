"use client";
import { getAllItems } from "@/redux/item/operetions";
import { selectItems } from "@/redux/item/selectors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MunuProductItem from "./MunuProductItem";

const MunuProducts = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  useEffect(() => {
    dispatch(getAllItems());
  }, [dispatch]);

  return (
    <ul className="grid grid-cols-1 gap-[16px]">
      {items?.length > 0 &&
        items?.map((item) => {
          return item && <MunuProductItem item={item} />;
        })}
    </ul>
  );
};

export default MunuProducts;
