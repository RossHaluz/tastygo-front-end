import ArrowUp from "../../images/arrow/arrow-up.svg";

const OurServiceList = () => {
  return (
    <ul className="flex flex-col lg:flex-row lg:justify-between gap-[16px] md:gap-[20px] lg:gap-[25px]">
      <li className="p-[16px] md:p-[24px] bg-[#152F23] rounded-[20px] flex flex-col gap-[24px] md:gap-[48px]">
        <h3 className="text-[#fff] text-[20px] md:text-[24px] md:leading-[28.8px] font-medium uppercase leading-[24px]">
          All-day dining
        </h3>

        <div className="flex items-center justify-between">
          <p className="text-[#fff] md:text-[16px] w-[213px] md:w-full">
            Variety of delightful dishes for every meal
          </p>
          <ArrowUp className="fill-[#fff] w-[46px] h-[46px] md:w-[64px] md:h-[64px]" />
        </div>
      </li>

      <li className="p-[16px] md:p-[24px] bg-[#152F23] rounded-[20px] flex flex-col gap-[24px] md:gap-[48px]">
        <h3 className="text-[#fff] text-[20px] md:text-[24px] md:leading-[28.8px] font-medium uppercase leading-[24px]">
          All-day dining
        </h3>

        <div className="flex items-center justify-between">
          <p className="text-[#fff] md:text-[16px] w-[213px] md:w-full">
            Variety of delightful dishes for every meal
          </p>
          <ArrowUp className="fill-[#fff] w-[46px] h-[46px] md:w-[64px] md:h-[64px]" />
        </div>
      </li>

      <li className="p-[16px] md:p-[24px] bg-[#152F23] rounded-[20px] flex flex-col gap-[24px] md:gap-[48px]">
        <h3 className="text-[#fff] text-[20px] md:text-[24px] md:leading-[28.8px] font-medium uppercase leading-[24px]">
          All-day dining
        </h3>

        <div className="flex items-center justify-between">
          <p className="text-[#fff] md:text-[16px] w-[213px] md:w-full">
            Variety of delightful dishes for every meal
          </p>
          <ArrowUp className="fill-[#fff] w-[46px] h-[46px] md:w-[64px] md:h-[64px]" />
        </div>
      </li>
    </ul>
  );
};

export default OurServiceList;
