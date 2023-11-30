"use client";
import { useState } from "react";
import Breadcrumbs from "../Breadcrumbs";
import UserAcountDetails from "./UserAcountDetails";
import UserAcountNavigation from "./UserAcountNavigation";
import UserAcountPersonalInfo from "./UserAcountPersonalInfo";

const UserAcount = () => {
  const [isActive, setIsActive] = useState("Personal information");

  const acountNavigations = [
    "Personal information",
    "Bonuses",
    "Order history",
    "Saved addresses",
    "Ratings and reviews",
  ];

  return (
    <div className="container">
      <Breadcrumbs
        homeElement={"Home"}
        separator={<span> / </span>}
        activeClasses="text-[#B7B7B7]"
        containerClasses="flex items-center gap-[4px] text-[16px] py-[24px] px-0 text-[#010101] leading-[14.4px] container"
        capitalizeLinks
      />
      <div className="pt-[70px] pb-[275px] flex items-start gap-[181px]">
        <div className="flex flex-col gap-[28px]">
          <UserAcountDetails />
          <UserAcountNavigation
            isActive={isActive}
            setIsActive={setIsActive}
            acountNavigations={acountNavigations}
          />
        </div>
        {isActive === "Personal information" && <UserAcountPersonalInfo />}
      </div>
    </div>
  );
};

export default UserAcount;
