"use client";
import Link from "next/link";
import User from "../../public/images/user/user.svg";
import Cart from "../../public/images/cart/cart.svg";
import Search from "../../public/images/search/search.svg";
import BurgerMenu from "./BurgerMenu";

const UserNav = () => {
  return (
    <div className="flex items-center gap-[16px]">
      <button type="button" className="hidden lg:flex">
        <Search />
      </button>

      <Link href="/auth/login">
        <User />
      </Link>

      <Link href="/" className="flex items-start gap-[1px]">
        <Cart />
        <span className="text-[16px] leading-[17.6px]">0</span>
      </Link>

      <button type="button">
        <BurgerMenu />
      </button>
    </div>
  );
};

export default UserNav;
