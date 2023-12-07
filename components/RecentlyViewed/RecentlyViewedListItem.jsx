"use client";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

const RecentlyViewedListItem = ({ item }) => {
  const { image, weight, nameItem, price, _id: id } = item;

  return (
    <SwiperSlide>
      <li className="flex flex-col gap-[24px] p-[24px] border border-solid border-[#010101]/[.20] rounded-[8px]">
        <Link href={`/menu/${id}`}>
          <Image
            src={image}
            alt={nameItem}
            width={280}
            height={198}
            className="mx-auto w-[280px] h-[198px] md:w-[312px] md:h-[213px] lg:w-[746px] lg:h-[287px]"
          />

          <div className="flex flex-col gap-[16px] items-start">
            <div className="flex flex-col gap-[8px] items-start">
              <h3 className="text-[16px] font-medium leading-[19.2px] md:text[20px] tracking-[0.2px]">
                {nameItem}
              </h3>
              <span className="leading-[16.8px] md:text-[16px]">{weight}</span>
            </div>
            <span className="text-[16px] text-[#536524] leading-[19.2px] font-medium md:text-[24px]">
              {price}
            </span>
          </div>
        </Link>

        <button
          type="button"
          className="py-[11.5px] px-[11.5px] md:py-[14.5px] md:px-[14.5px] md:text-[16px] md:leading-[19.2px] lg:py-[19.5px] lg:px-[19.5px] w-full border border-solid border-[#010101] rounded-[30px] flex items-center justify-center leading-[16.8px] font-medium"
        >
          To Order
        </button>
      </li>
    </SwiperSlide>
  );
};

export default RecentlyViewedListItem;
