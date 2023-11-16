"use client";
import MenuBanner from "./MenuBanner";
import { getAllItems } from "@/redux/item/operetions";
import { selectIsLoading, selectItems } from "@/redux/item/selectors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuTitle from "./MenuTitle";
import MunuCategories from "./MenuCategories";
import MunuProducts from "./MenuProducts";
import ShowMoreBtn from "./ShowMoreBtn";

const Menu = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllItems());
  }, [dispatch]);

  return (
    <div>
      <MenuBanner />
      <div className="py-[32px] md:pt-[48px] md:pb-[64px] lg:pb-[80px]">
        <div className="flex flex-col gap-[24px]">
          <MunuCategories />
          {!isLoading && (
            <div className="container flex flex-col gap-[10px]">
              <MenuTitle />
              {items.length > 0 && <MunuProducts items={items} />}
            </div>
          )}
        </div>
        <ShowMoreBtn />
      </div>
    </div>
  );
};

export default Menu;
