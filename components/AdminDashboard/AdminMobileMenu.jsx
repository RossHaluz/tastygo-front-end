"use client";
import { AiOutlineClose } from "react-icons/ai";
import AdminMobileMenuList from "./AdminMobileMenuList";
import AdminMobileMenuLogoutBtn from "./AdminMobileMenuLogoutBtn";
import { useDispatch, useSelector } from "react-redux";
import { selectIsOpen } from "@/redux/mobileMenu/selectors";
import { closeMobileMenu } from "@/redux/mobileMenu/slice";

const AdminMobileMenu = () => {
  const isOpen = useSelector(selectIsOpen);
  const dispatch = useDispatch();

  const closeMenuOnBackdrop = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    dispatch(closeMobileMenu(false));
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed w-full h-screen bg-[#1e1e2d]/[.15]"
          onClick={closeMenuOnBackdrop}
        >
          <div className="w-[75%] h-full bg-[#fff] flex flex-col pb-[50px]">
            <div className="p-[16px] border-b border-[#B7B7B7] flex items-center justify-between">
              <h3 className="text-[18px] font-medium">Menu</h3>
              <button
                type="button"
                onClick={() => dispatch(closeMobileMenu(false))}
              >
                <AiOutlineClose className="w-[24px] h-[24px]" />
              </button>
            </div>

            <AdminMobileMenuList />

            <AdminMobileMenuLogoutBtn />
          </div>
        </div>
      )}
    </>
  );
};

export default AdminMobileMenu;
