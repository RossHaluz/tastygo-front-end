import Image from "next/image";
import Link from "next/link";
import Favorite from "../../public/images/favorite/heart.svg";

const MenuProductItem = ({ item }) => {
  const { image, nameItem, weight, price, _id: id } = item;

  return (
    <li className="p-[24px] border border-s border-[#010101]/[.20] rounded-[8px]">
      <Link
        href={`/menu/${id}`}
        className="flex flex-col gap-[24px] justify-center items-center relative"
      >
        <Image
          src={image}
          width={280}
          height={198}
          className="w-[280px] h-[198px] md:w-[301px] md:h-[213px]"
        />
        <div className="flex flex-col gap-[10px] mr-auto">
          <div className="flex flex-col gap-[8px]">
            <h3 className="text-[16px] font-medium leading-[19.2px] text-[#1E1E2D]">
              {nameItem}
            </h3>
            <span className="leading-[16.8px] text-[#1E1E2D]">{weight}g</span>
          </div>
          <span className="text-[#536524] text-[16px] font-medium leading-[19.2px]">
            ${price}
          </span>
        </div>
        <button
          type="button"
          className="w-full p-[11.5px] leading-[16.8px] font-medium border border-solid border-[#010101] rounded-[30px]"
        >
          To Order
        </button>
        <button type="button">
          <Favorite size={24} className="absolute top-0 right-0" />
        </button>
      </Link>
    </li>
  );
};

export default MenuProductItem;
