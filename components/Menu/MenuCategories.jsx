"use client";
import { getAllCategories } from "@/redux/catecory/operetions";
import { selectCategories } from "@/redux/catecory/selectors";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const MenuCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div className="pl-[24px] overflow-x-auto flex items-center gap-[8px]">
      {categories?.length > 0 &&
        categories?.map(({ title, _id: id }) => {
          return (
            <Link
              href="/"
              key={id}
              className="px-[16px] py-[12px] border border-solid border-[#010101] rounded-[30px] flex justify-center items-center min-w-[140px]"
            >
              {title}
            </Link>
          );
        })}
    </div>
  );
};

export default MenuCategories;
