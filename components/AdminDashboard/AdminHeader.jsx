"use client";
import { openMobileMenu } from "@/redux/mobileMenu/slice";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch } from "react-redux";

const AdminHeader = () => {
  const dispatch = useDispatch();

  return (
    <header>
      <div className="px-[20px] py-[16px] border-b border-[#B7B7B7]">
        <button type="button" onClick={() => dispatch(openMobileMenu(true))}>
          <AiOutlineMenu className="w-[24px] h-[24px] lg:hidden" />
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
