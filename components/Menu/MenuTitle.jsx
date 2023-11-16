"use client";
import { selectItems } from "@/redux/item/selectors";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

const MenuTitle = () => {
  const items = useSelector(selectItems);
  const { categoryName } = useParams();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-start gap-[4px]">
        <h1 className="text-[32px] font-medium leading-[38.4px] text-[#1E1E2D] md:text-[64px] md:leading-[70.4px]">
          {categoryName ? categoryName?.replace(/%20/g, "-") : "All"}
        </h1>
        <span className="text-[#1E1E2D] font-medium text-[20px] md:text-[24px] tracking-[0.2px]">
          {items?.length}
        </span>
      </div>

      <span className="text-[20px] font-medium tracking-[0.2px] text-[#1E1E2D] md:text-[24px]">
        {items?.length} items
      </span>
    </div>
  );
};

export default MenuTitle;
