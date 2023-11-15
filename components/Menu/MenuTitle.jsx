"use client";
import { selectItems } from "@/redux/item/selectors";
import { useSelector } from "react-redux";

const MenuTitle = () => {
  const items = useSelector(selectItems);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-start gap-[4px]">
        <h1 className="text-[32px] font-medium leading-[38.4px] text-[#1E1E2D]">
          All
        </h1>
        <span>{items?.length}</span>
      </div>

      <span className="text-[20px] font-medium tracking-[0.2px] text-[#1E1E2D]">
        {items?.length} items
      </span>
    </div>
  );
};

export default MenuTitle;
