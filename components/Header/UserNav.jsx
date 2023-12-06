"use client";
import Link from "next/link";
import User from "../../public/images/user/user.svg";
import Cart from "../../public/images/cart/cart.svg";
import Search from "../../public/images/search/search.svg";
import BurgerMenu from "./BurgerMenu";
import Modal from "../Modal";
import Login from "../Login/Login";
import { useSession } from "next-auth/react";

const UserNav = () => {
  const session = useSession();

  console.log(session);

  return (
    <div className="flex items-center gap-[16px]">
      <button type="button" className="hidden lg:flex">
        <Search />
      </button>

      <>
        {session.status === "authenticated" ? (
          <Link href="/acount">
            <User />
          </Link>
        ) : (
          <Modal data={<User />} modalStyles={"p-[48px] w-[526px]"}>
            <Login />
          </Modal>
        )}
      </>

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
