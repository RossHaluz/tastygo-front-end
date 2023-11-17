"use client";
import { useParams } from "next/navigation";
import MenuBanner from "../Menu/MenuBanner";
import MenuCategories from "../Menu/MenuCategories";
import MenuProducts from "../Menu/MenuProducts";
import MenuTitle from "../Menu/MenuTitle";
import { getCategoryItems } from "@/redux/item/operetions";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectIsLoading,
  selectItems,
  selectLimit,
  selectTotalPages,
} from "@/redux/item/selectors";
import { useEffect, useState } from "react";
import ShowMoreBtn from "../Menu/ShowMoreBtn";

const CategoryItems = () => {
  const items = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const [currentItems, setCurrentItems] = useState([]);
  const currentPage = useSelector(selectCurrentPage);
  const currentLimit = useSelector(selectLimit);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(getCategoryItems({ categoryName, currentPage, currentLimit }));
    setCurrentItems((prev) => [...prev, ...items]);
  }, [dispatch, currentPage, currentLimit]);

  const handleShowMoreClick = () => {
    const nextPage = currentPage + 1;

    dispatch(
      getCategoryItems({ categoryName, currentPage: nextPage, currentLimit })
    );
  };

  return (
    <div>
      <MenuBanner />
      <div className="py-[32px] md:pt-[48px] md:pb-[64px] lg:pb-[80px]">
        <div className="flex flex-col gap-[24px]">
          <MenuCategories />
          {!isLoading && (
            <div className="container flex flex-col gap-[10px] md:gap-[39px]">
              <MenuTitle />
              {items?.length > 0 ? (
                <MenuProducts items={items} />
              ) : (
                "Items not found..."
              )}
            </div>
          )}
        </div>
        <ShowMoreBtn
          onClick={handleShowMoreClick}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default CategoryItems;
