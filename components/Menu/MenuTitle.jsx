"use client";
import { selectTotalItems } from "@/redux/item/selectors";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

const MenuTitle = () => {
  const totalItems = useSelector(selectTotalItems);
  const { categoryName } = useParams();

  return (
    <div className="flex items-start gap-[4px]">
      <h1 className="text-[32px] font-medium leading-[38.4px] text-[#1E1E2D] md:text-[64px] md:leading-[70.4px]">
        {categoryName ? categoryName?.replace(/%20/g, "-") : "All"}
      </h1>
      <span className="text-[#1E1E2D] font-medium text-[20px] md:text-[24px] tracking-[0.2px]">
        {totalItems}
      </span>
    </div>
  );
};

export default MenuTitle;
