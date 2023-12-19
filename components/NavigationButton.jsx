import React from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const NavigationButton = ({ navigationPrevRef, navigationNextRef, styles }) => {
  return (
    <div className={`flex items-center relative gap-[8px] mx-auto ${styles}`}>
      <button
        type="button"
        ref={navigationPrevRef}
        className="swiper-button-prev"
      >
        <MdOutlineKeyboardArrowLeft size={24} />
      </button>
      <div className="swiper-pagination"></div>
      <button
        type="button"
        ref={navigationNextRef}
        className="swiper-button-next"
      >
        <MdOutlineKeyboardArrowRight size={24} />
      </button>
    </div>
  );
};

export default NavigationButton;
