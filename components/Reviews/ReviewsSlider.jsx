"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import NavigationButton from "../NavigationButton";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import avatar from "../../public/images/avatar/avatar.png";
import ReactStars from "react-rating-stars-component";
import Link from "next/link";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const ReviewsSlider = () => {
  const stars = (
    <ReactStars
      count={5}
      value={5}
      activeColor="#536524"
      edit={false}
      size={16}
    />
  );

  const items = [
    {
      desc: "Tasty Bites Express has won me over with their amazing pizzas. The crust is just the right balance of crispy and chewy, and the toppings are generous. But that's not all – their diverse salad options and creative bowls are a treat for health-conscious foodies. And if you have a sweet tooth, their desserts are a must-try. A one-stop-shop for a delightful feast!",
      stars: stars,
      avatar: avatar,
      name: "William",
      dateAdded: "2 days ago",
      id: 1,
    },
    {
      desc: "Tasty Bites Express has won me over with their amazing pizzas. The crust is just the right balance of crispy and chewy, and the toppings are generous. But that's not all – their diverse salad options and creative bowls are a treat for health-conscious foodies. And if you have a sweet tooth, their desserts are a must-try. A one-stop-shop for a delightful feast!",
      stars: stars,
      avatar: avatar,
      name: "William",
      dateAdded: "2 days ago",
      id: 2,
    },
    {
      desc: "Tasty Bites Express has won me over with their amazing pizzas. The crust is just the right balance of crispy and chewy, and the toppings are generous. But that's not all – their diverse salad options and creative bowls are a treat for health-conscious foodies. And if you have a sweet tooth, their desserts are a must-try. A one-stop-shop for a delightful feast!",
      stars: stars,
      avatar: avatar,
      name: "William",
      dateAdded: "2 days ago",
      id: 3,
    },
  ];

  return (
    <div className="relative w-full flex flex-col gap-[16px] md:gap-[24px] lg:hidden">
      <div className="lg:hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1.2}
          spaceBetween={10}
          parallax={true}
          loop={true}
          navigation={{
            prevEl: ".swiper-btn-prev-reviews",
            nextEl: ".swiper-btn-next-reviews",
          }}
          pagination={{
            dynamicBullets: true,
            el: ".custom-pagination-reviewsMob",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2,
              centeredSlides: true,
            },
            1440: {
              slidesPerView: 2,
              swipeHandler: true,
            },
          }}
        >
          <ul>
            {items?.map(({ desc, stars, avatar, name, dateAdded, id }) => {
              return (
                <SwiperSlide key={id}>
                  <li className="flex flex-col p-[24px] border border-solid border-[#010101]/[.20] rounded-[8px] gap-[16px]">
                    <p className="pb-[40px] text-left leading-[16.8px] text-[14px] md:text-[16px]">
                      {desc}
                    </p>

                    {stars}
                    <div className="flex items-center gap-[8px]">
                      <Image src={avatar} width={48} height={48} alt="Avatar" />
                      <div className="flex flex-col items-start gap-[2px]">
                        <span className="text-[16px] font-medium leading-[19.2px]">
                          {name}
                        </span>
                        <span className="text-[14px] md:text-[16px] leading-[19.6px] text-[#B7B7B7]">
                          {dateAdded}
                        </span>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
              );
            })}
          </ul>
        </Swiper>
      </div>
      <div className={`flex items-center gap-[8px] mx-auto`}>
        <button type="button" className="swiper-btn-prev-reviews">
          <MdOutlineKeyboardArrowLeft size={24} />
        </button>
        <div className="custom-pagination-reviewsMob"></div>
        <button type="button" className="swiper-btn-next-reviews">
          <MdOutlineKeyboardArrowRight size={24} />
        </button>
      </div>

      <div className="flex flex-col items-center md:items-start gap-[8px] md:gap-[16px]">
        <Link
          href="/"
          className="p-[11.5px] w-[280px] md:w-[308px] md:text-[16px] md:p-[13.5px] bg-[#152F23] rounded-[30px] text-[#fff] font-medium leading-[16.8px] flex items-center justify-center"
        >
          Add review
        </Link>
        <p className="text-[12px] text-[#1E1E2D] leading-[14.4px] md:text-[18px] md:leading-[21.6px]">
          *Only registered users can leave reviews
        </p>
      </div>
    </div>
  );
};

export default ReviewsSlider;
