"use client";
import clsx from "clsx";

const ShowMoreBtn = ({ onClick, currentPage, totalPages }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "py-[11.5px] px-[104.5px] w-[280px] bg-[#152F23] text-[#fff] font-medium leading-[16.8px] flex justify-center items-center mx-auto mt-[24px] rounded-[30px]",
        {
          hidden: currentPage === totalPages,
        }
      )}
    >
      Load more
    </button>
  );
};

export default ShowMoreBtn;
