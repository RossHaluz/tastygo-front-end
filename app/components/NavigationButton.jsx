import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const NavigationButton = ({ navigationPrevRef, navigationNextRef }) => {
  return (
    <div className="flex items-center gap-[8px] mx-auto">
      <button type="button" ref={navigationPrevRef}>
        <MdOutlineKeyboardArrowLeft size={24} />
      </button>

      <div className="swiper-pagination flex items-center gap-[8px]">
        <span className="swiper-pagination-bullet swiper-pagination-bullet-active w-[16px] h-[6px] rounded-[30px] bg-[#F9854E]"></span>
        <span className="swiper-pagination-bullet w-[6px] h-[6px] rounded-full bg-[#f9854e7f]"></span>
        <span className="swiper-pagination-bullet w-[6px] h-[6px] rounded-full bg-[#f9854e7f]"></span>
      </div>

      <button type="button" ref={navigationNextRef}>
        <MdOutlineKeyboardArrowRight size={24} />
      </button>
    </div>
  );
};

export default NavigationButton;
