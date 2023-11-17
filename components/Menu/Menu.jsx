"use client";
import MenuBanner from "./MenuBanner";
import { getAllItems } from "@/redux/item/operetions";
import {
  selectCurrentPage,
  selectIsLoading,
  selectItems,
  selectLimit,
  selectTotalPages,
} from "@/redux/item/selectors";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuTitle from "./MenuTitle";
import MunuCategories from "./MenuCategories";
import MunuProducts from "./MenuProducts";
import ShowMoreBtn from "./ShowMoreBtn";

const Menu = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(selectCurrentPage);
  const currentLimit = useSelector(selectLimit);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(getAllItems({ page: currentPage, limit: currentLimit }));
  }, [dispatch, currentPage, currentLimit]);

  const handleShowMoreClick = () => {
    const nextPage = currentPage + 1;

    dispatch(getAllItems({ page: nextPage, limit: currentLimit }));
  };

  return (
    <div>
      <MenuBanner />
      <div className="py-[32px] md:pt-[48px] md:pb-[64px] lg:pb-[80px]">
        <div className="flex flex-col gap-[24px] overflow-y-auto">
          <MunuCategories />
          {!isLoading && (
            <div className="container flex flex-col gap-[10px]">
              <MenuTitle />
              {items?.length > 0 && <MunuProducts items={items} />}
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

export default Menu;
