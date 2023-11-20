import Terminal from "../../public/images/payment/icons/terminal.svg";
import Cash from "../../public/images/payment/icons/cash.svg";
import Online from "../../public/images/payment/icons/online.svg";

const PaymentList = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
      <li className="flex flex-col gap-[16px] justify-center items-center py-[16px] px-[45.33px] rounded-[16px] bg-[#DCDED0]">
        <div className="p-[8px] border border-solid border-[#010101] rounded-[50%] flex justify-center items-center">
          <Terminal className="w-[24px] h-[24px] flex justify-center items-center md:w-[36px] md:h-[37px]" />
        </div>
        <div className="flex flex-col gap-[8px] text-center">
          <h3 className="leading-[16.8px] uppercase md:text-[18px] md:leading-[21.6px]">
            Terminal Payment
          </h3>
          <p>Pay with visa or mastercard at the time of delivery</p>
        </div>
      </li>

      <li className="flex flex-col gap-[16px] justify-center items-center  py-[16px] px-[45.33px] rounded-[16px] bg-[#DCDED0]">
        <div className="p-[8px]  border border-solid border-[#010101] rounded-[50%] flex justify-center items-center">
          <Cash className="w-[24px] h-[24px] md:w-[36px] md:h-[37px]" />
        </div>
        <div className="flex flex-col gap-[8px] text-center">
          <h3 className="leading-[16.8px] uppercase md:text-[18px] md:leading-[21.6px]">
            Terminal Payment
          </h3>
          <p>Pay with visa or mastercard at the time of delivery</p>
        </div>
      </li>

      <li className="flex flex-col gap-[16px] justify-center items-center  py-[16px] px-[45.33px] rounded-[16px] bg-[#DCDED0]">
        <div className="p-[8px] border border-solid border-[#010101] rounded-[50%] flex justify-center items-center">
          <Online className="w-[24px] h-[24px] md:w-[36px] md:h-[37px]" />
        </div>
        <div className="flex flex-col gap-[8px] text-center">
          <h3 className="leading-[16.8px] uppercase md:text-[18px] md:leading-[21.6px]">
            Terminal Payment
          </h3>
          <p>Pay with visa or mastercard at the time of delivery</p>
        </div>
      </li>
    </ul>
  );
};

export default PaymentList;
