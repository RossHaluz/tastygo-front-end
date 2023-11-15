import Image from "next/image";
import Link from "next/link";

const MenuProductItem = ({ item }) => {
  const { image, nameItem, weight, price } = item;

  return (
    <li className="p-[24px] border border-s border-[#010101]/[.20] rounded-[8px]">
      <Link
        href="/"
        className="flex flex-col gap-[24px] justify-center items-center"
      >
        <Image
          src={image}
          width={280}
          height={198}
          className="w-[280px] h-[198px]"
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
      </Link>
    </li>
  );
};

export default MenuProductItem;
