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

const ReviewsDesc = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const stars = (
    <ReactStars
      count={5}
      value={5}
      activeColor="#536524"
      edit={false}
      size={24}
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
      id: 1,
    },
    {
      desc: "Tasty Bites Express has won me over with their amazing pizzas. The crust is just the right balance of crispy and chewy, and the toppings are generous. But that's not all – their diverse salad options and creative bowls are a treat for health-conscious foodies. And if you have a sweet tooth, their desserts are a must-try. A one-stop-shop for a delightful feast!",
      stars: stars,
      avatar: avatar,
      name: "William",
      dateAdded: "2 days ago",
      id: 1,
    },
  ];

  return (
    <section className="py-[80px] hidden lg:flex flex-col gap-[16px] md:gap-[36px] lg:gap-[32px] container">
      <div className="flex items-center justify-between">
        <h2 className="text-[18px] leading-[21.6px] uppercase text-[#F9854E]">
          reviews
        </h2>
        <div className="flex flex-col gap-[4px]">
          <Link
            href="/"
            className="text-[20px] tracking-[0.2px] text-[#536524]"
          >
            View all reviews
          </Link>
          <div className="w-full h-[1px] bg-[#536524]"></div>
        </div>
      </div>

      <div className="grid grid-cols-3 items-center gap-[30px] h-full">
        <div className="flex flex-col gap-[117px] w-[407px]">
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[16px]">
              <h3 className="text-[64px] font-medium leading-[70.4px]">
                Our clients have a ton to say
              </h3>
              <p className="text-[18px] leading-[21.6px]">
                *Only registered users can leave reviews
              </p>
            </div>
            <button
              type="button"
              className="py-[20.5px] px-[138.5px] w-[362px] bg-[#152F23] rounded-[30px] text-[#fff] text-[16px] font-medium leading-[19.2px] flex items-center justify-center"
            >
              Add review
            </button>
          </div>

          <NavigationButton
            navigationPrevRef={navigationPrevRef}
            navigationNextRef={navigationNextRef}
            styles={"ml-0"}
          />
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={2}
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
          className="col-span-2 h-full"
        >
          <ul>
            {items?.map(({ desc, stars, avatar, name, dateAdded, id }) => {
              return (
                <SwiperSlide key={id}>
                  <li className="flex flex-col justify-between h-full p-[32px] border border-solid border-[#010101]/[.20] rounded-[8px]">
                    <p className="text-left text-[16px]">{desc}</p>

                    <div className="flex flex-col gap-[16.5px]">
                      {stars}
                      <div className="flex items-center gap-[8px]">
                        <Image
                          src={avatar}
                          width={48}
                          height={48}
                          alt="Avatar"
                        />
                        <div className="flex flex-col items-start gap-[2px]">
                          <span className="text-[20px] font-medium tracking-[0.2px]]">
                            {name}
                          </span>
                          <span className="text-[16px] text-[#B7B7B7]">
                            {dateAdded}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
              );
            })}
          </ul>
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsDesc;
