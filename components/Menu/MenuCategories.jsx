"use client";
import { getAllCategories } from "@/redux/catecory/operetions";
import { selectCategories } from "@/redux/catecory/selectors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const MenuCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div className="pl-[24px] md:pl-[20px] md:pr-[20px] lg:pl-[80px] lg:pr-[80px] overflow-x-auto flex items-center gap-[8px] md:gap-[16px] pr-[24px]">
      {categories?.length > 0 &&
        categories?.map(({ title, _id: id }) => {
          return (
            <button
              key={id}
              className="px-[16px] py-[12px] border border-solid border-[#010101] rounded-[30px] flex justify-center items-center min-w-[140px]"
            >
              {title}
            </button>
          );
        })}
    </div>
  );
};

export default MenuCategories;
