import ArrowUp from "../../images/arrow/arrow-up.svg";

const OurServiceList = () => {
  return (
    <ul className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[25px]">
      <li className="p-[16px] bg-[#152F23] rounded-[20px] flex flex-col gap-[24px] md:gap-[48px]">
        <h3 className="text-[#fff] text-[20px] font-medium uppercase leading-[24px]">
          All-day dining
        </h3>

        <div className="flex items-center justify-between">
          <p className="text-[#fff] w-[213px] md:w-full">
            Variety of delightful dishes for every meal
          </p>
          <ArrowUp />
        </div>
      </li>

      <li className="p-[16px] bg-[#152F23] rounded-[20px] flex flex-col gap-[24px] md:gap-[48px]">
        <h3 className="text-[#fff] text-[20px] font-medium uppercase leading-[24px]">
          All-day dining
        </h3>

        <div className="flex items-center justify-between">
          <p className="text-[#fff] w-[213px] md:w-full">
            Variety of delightful dishes for every meal
          </p>
          <ArrowUp />
        </div>
      </li>

      <li className="p-[16px] bg-[#152F23] rounded-[20px] flex flex-col gap-[24px] md:gap-[48px]">
        <h3 className="text-[#fff] text-[20px] font-medium uppercase leading-[24px]">
          All-day dining
        </h3>

        <div className="flex items-center justify-between">
          <p className="text-[#fff] w-[213px] md:w-full">
            Variety of delightful dishes for every meal
          </p>
          <ArrowUp />
        </div>
      </li>
    </ul>
  );
};

export default OurServiceList;
