"use client";
import Link from "next/link";
import { IoPricetagOutline } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";

import { closeMobileMenu } from "@/redux/mobileMenu/slice";
import { useDispatch } from "react-redux";

const AdminMobileMenuList = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-[16px] p-[24px]">
      <Link
        href="/admin/items"
        onClick={() => dispatch(closeMobileMenu(false))}
        className="flex items-center gap-[16px] pb-[10px] border-b border-[#B7B7B7]"
      >
        <IoPricetagOutline className="w-[24px] h-[24px]" />
        Items
      </Link>

      <Link
        href="/admin/categories"
        onClick={() => dispatch(closeMobileMenu(false))}
        className="flex items-center gap-[16px] pb-[10px] border-b border-[#B7B7B7]"
      >
        <BiCategoryAlt className="w-[24px] h-[24px]" />
        Category
      </Link>

      <Link
        href="/"
        className="flex items-center gap-[16px] pb-[10px] border-b border-[#B7B7B7]"
      >
        <FiShoppingCart className="w-[24px] h-[24px]" />
        Orders
      </Link>
    </div>
  );
};

export default AdminMobileMenuList;
