import Image from "next/image";

const ReviewsAllListItem = ({ item }) => {
  const { desc, reting, avatar, name, dateAdded } = item;

  return (
    <li className="p-4 border border-solid border-[rgba(0, 0, 0, 0.20)] rounded-[8px] flex flex-col gap-[16px]">
      <p className="leading-[16.8px] h-[201px] md:text-4 md:h-[240px]">
        {desc}
      </p>
      {reting}
      <div className="flex items-center gap-[8px]">
        <Image src={avatar} width={48} height={48} />
        <div className="flex flex-col gap-[2px]">
          <span className="tetx-[16px] leading-[19.2px] font-medium">
            {name}
          </span>
          <span className="text-[#B7B7B7] leading-[19.6px] md:text-[16px]">
            {dateAdded}
          </span>
        </div>
      </div>
    </li>
  );
};

export default ReviewsAllListItem;
