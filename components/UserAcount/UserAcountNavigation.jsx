"use client";
import clsx from "clsx";

const UserAcountNavigation = ({ isActive, acountNavigations, setIsActive }) => {
  return (
    <div className="bg-[#ECE9E2] px-[32px] py-[48px] rounded-[10px] flex flex-col gap-[24px]">
      {acountNavigations?.map((item) => {
        return (
          <button
            key={item}
            type="button"
            onClick={() => setIsActive(item)}
            className={clsx("text-[18px] leading-[21.6px] text-[#1E1E2D]", {
              "underline font-medium": item === isActive,
            })}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default UserAcountNavigation;
