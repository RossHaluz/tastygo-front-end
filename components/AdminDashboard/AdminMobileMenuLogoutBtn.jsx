"use client";
import { signOut } from "next-auth/react";

const AdminMobileMenuLogoutBtn = () => {
  return (
    <button
      type="button"
      className="mt-auto mx-auto w-[60%] bg-[#152F23] text-[#fff] flex items-center justify-center text-[16px] font-medium rounded-[5px] p-[13.5px]"
      onClick={() => signOut()}
    >
      Log out
    </button>
  );
};

export default AdminMobileMenuLogoutBtn;
