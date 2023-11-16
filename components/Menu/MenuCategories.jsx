"use client";
import { getAllCategories } from "@/redux/catecory/operetions";
import { selectCategories } from "@/redux/catecory/selectors";
import { getCategoryItems } from "@/redux/item/operetions";
import clsx from "clsx";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const MenuCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const { categoryName } = useParams();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div className="pl-[24px] md:pl-[20px] md:pr-[20px] lg:pl-[80px] lg:pr-[80px] overflow-x-auto flex items-center gap-[8px] md:gap-[16px] pr-[24px]">
      {categories?.length > 0 &&
        categories?.map(({ title, _id: id }) => {
          return (
            <Link
              href={`/menu/category/${title}`}
              onClick={() => dispatch(getCategoryItems(categoryName))}
              key={id}
              className={clsx(
                "px-[16px] py-[12px] border border-solid border-[#010101] rounded-[30px] flex justify-center items-center min-w-[140px]",
                {
                  "bg-[#152F23] text-[#fff] border-none":
                    title?.toLowerCase() === categoryName?.toLowerCase(),
                }
              )}
            >
              {title}
            </Link>
          );
        })}
    </div>
  );
};

export default MenuCategories;
