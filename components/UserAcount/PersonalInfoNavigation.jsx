"use client";
import clsx from "clsx";

const PersonalInfoNavigation = ({ isActive, setIsActive, buttons }) => {
  return (
    <>
      {buttons?.map((item) => {
        return (
          <button
            key={item}
            type="button"
            onClick={() => setIsActive(item)}
            className={clsx(
              "text-[18px] leading-[21.6px] p-[16px] font-medium rounded-[30px] border border-solid border-[#CACACA] flex justify-center items-center",
              { "border-[#F9854E]": item === isActive }
            )}
          >
            {item}
          </button>
        );
      })}
    </>
  );
};

export default PersonalInfoNavigation;
