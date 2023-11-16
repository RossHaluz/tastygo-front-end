"use client";
import { useParams } from "next/navigation";
import MenuBanner from "../Menu/MenuBanner";
import MenuCategories from "../Menu/MenuCategories";
import MenuProducts from "../Menu/MenuProducts";
import MenuTitle from "../Menu/MenuTitle";
import { getCategoryItems } from "@/redux/item/operetions";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectItems } from "@/redux/item/selectors";
import { useEffect } from "react";

const CategoryItems = () => {
  const items = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const { categoryName } = useParams();

  useEffect(() => {
    dispatch(getCategoryItems(categoryName));
  }, [dispatch]);

  return (
    <div>
      <MenuBanner />
      <div className="py-[32px] md:pt-[48px] md:pb-[64px] lg:pb-[80px]">
        <div className="flex flex-col gap-[24px]">
          <MenuCategories />
          {!isLoading && (
            <div className="container flex flex-col gap-[10px] md:gap-[39px]">
              <MenuTitle />
              {items.length > 0 ? (
                <MenuProducts items={items} />
              ) : (
                "Items not found..."
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryItems;
