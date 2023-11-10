"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import dishes from "../../public/images/items/dishes.png";
import "swiper/css";
import "swiper/css/navigation";
import NavigationButton from "../NavigationButton";

const PopularDishesSlider = () => {
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
    <div className="p-[24px] md:py-[48px] md:px-[20px] lg:py-[62px] lg:px-[155px] bg-[#DCDED0] flex flex-col gap-[16px] md:gap-[24px] h-auto">
      <Link
        href="/"
        className="py-[4px] text-[#536524] border-b border-[#536524] leading-[16.8px] mx-auto md:mr-0 md:tracking-[0.2px] md:text-[20px]"
      >
        View menu
      </Link>
      <div className="relative w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          roundLengths={true}
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          pagination={{
            dynamicBullets: true,
          }}
        >
          <ul>
            {items?.map(({ img, title, weigth, price, id }) => {
              return (
                <SwiperSlide key={id} className="py-[24px] px-[16px]">
                  <li className="flex flex-col gap-[24px]">
                    <Image
                      src={img}
                      alt={title}
                      width={280}
                      height={198}
                      className="mx-auto md:w-[312px] md:h-[213px] lg:w-[746px] lg:h-[287px]"
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
      </div>

      <NavigationButton
        navigationNextRef={navigationNextRef}
        navigationPrevRef={navigationPrevRef}
      />
    </div>
  );
};

export default PopularDishesSlider;
