"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import NavigationButton from "../NavigationButton";
import Image from "next/image";
import dishes from "../../images/items/dishes.png";
import "swiper/css";
import "swiper/css/navigation";

const SeasonaMenuSlider = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const items = [
    {
      img: dishes,
      title: "Salad With Mussels",
      weigth: "300g",
      price: "$ 3.49",
      id: 1,
    },
    {
      img: dishes,
      title: "Salad With Mussels2",
      weigth: "300g",
      price: "$ 3.49",
      id: 2,
    },
    {
      img: dishes,
      title: "Salad With Mussels3",
      weigth: "300g",
      price: "$ 3.49",
      id: 3,
    },
  ];

  return (
    <div className="relative w-full flex flex-col gap-[24px]">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1.2}
        spaceBetween={10}
        parallax={true}
        loop={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          1440: {
            slidesPerView: 3,
            swipeHandler: false,
          },
        }}
      >
        <ul>
          {items?.map(({ img, title, weigth, price, id }) => {
            return (
              <SwiperSlide key={id}>
                <li className="flex flex-col gap-[24px] p-[24px] border border-solid border-[#010101]/[.20] rounded-[8px]">
                  <Image
                    src={img}
                    alt={title}
                    width={280}
                    height={198}
                    className="mx-auto w-[280px] h-[198px] md:w-[312px] md:h-[213px] lg:w-[746px] lg:h-[287px]"
                  />

                  <div className="flex flex-col gap-[16px] items-start">
                    <div className="flex flex-col gap-[8px] items-start">
                      <h3 className="text-[16px] font-medium leading-[19.2px] md:text[20px] tracking-[0.2px]">
                        {title}
                      </h3>
                      <span className="leading-[16.8px] md:text-[16px]">
                        {weigth}
                      </span>
                    </div>
                    <span className="text-[16px] text-[#536524] leading-[19.2px] font-medium md:text-[24px]">
                      {price}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="py-[11.5px] px-[11.5px] md:py-[14.5px] md:px-[14.5px] md:text-[16px] md:leading-[19.2px] lg:py-[19.5px] lg:px-[19.5px] w-full border border-solid border-[#010101] rounded-[30px] flex items-center justify-center leading-[16.8px] font-medium"
                  >
                    To Order
                  </button>
                </li>
              </SwiperSlide>
            );
          })}
        </ul>
      </Swiper>
      <div className="flex justify-center lg:hidden">
        <NavigationButton
          navigationPrevRef={navigationPrevRef}
          navigationNextRef={navigationNextRef}
        />
      </div>
    </div>
  );
};

export default SeasonaMenuSlider;
