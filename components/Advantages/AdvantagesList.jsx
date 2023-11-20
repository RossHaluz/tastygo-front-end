import Delivery from "../../public/images/advantages/delivery.svg";
import Hours from "../../public/images/advantages/hours.svg";
import Maps from "../../public/images/advantages/maps.svg";
import Pickup from "../../public/images/advantages/pickup.svg";
import Doorstep from "../../public/images/advantages/doorstep.svg";

const AdvantagesList = () => {
  return (
    <ul className="flex flex-col gap-[24px]">
      <li className="flex items-start gap-[12px]">
        <div className="flex items-center justify-center p-[8px] border border-solid border-[#010101] rounded-[50%]">
          <Delivery className="w-[24px] h-[24px] md:w-[36px] md:h-[37px]" />
        </div>
        <div className="flex flex-col gap-[8px]">
          <h3 className="text-[#536524] leading-[16.8px] font-medium md:text-[16px] md:leading-[19.2px]">
            Free delivery on orders over $15
          </h3>
          <p className="leading-[16.8px] md:text-[16px] md:w-[570px]">
            Indulge in your favorite dishes from Tasty Go and enjoy the added
            perk of free delivery when your order totals $50 or more.
          </p>
        </div>
      </li>

      <li className="flex items-start gap-[12px]">
        <div className="flex items-center justify-center p-[8px] border border-solid border-[#010101] rounded-[50%]">
          <Hours className="w-[24px] h-[24px] md:w-[36px] md:h-[37px]" />
        </div>
        <div className="flex flex-col gap-[8px]">
          <h3 className="text-[#536524] leading-[16.8px] font-medium md:text-[16px] md:leading-[19.2px]">
            Free delivery on orders over $15
          </h3>
          <p className="leading-[16.8px] md:text-[16px] md:w-[570px]">
            Indulge in your favorite dishes from Tasty Go and enjoy the added
            perk of free delivery when your order totals $50 or more.
          </p>
        </div>
      </li>

      <li className="flex items-start gap-[12px]">
        <div className="flex items-center justify-center p-[8px] border border-solid border-[#010101] rounded-[50%]">
          <Maps className="w-[24px] h-[24px] md:w-[36px] md:h-[37px]" />
        </div>
        <div className="flex flex-col gap-[8px]">
          <h3 className="text-[#536524] leading-[16.8px] font-medium md:text-[16px] md:leading-[19.2px]">
            Free delivery on orders over $15
          </h3>
          <p className="leading-[16.8px] md:text-[16px] md:w-[570px]">
            Indulge in your favorite dishes from Tasty Go and enjoy the added
            perk of free delivery when your order totals $50 or more.
          </p>
        </div>
      </li>

      <li className="flex items-start gap-[12px]">
        <div className="flex items-center justify-center p-[8px] border border-solid border-[#010101] rounded-[50%]">
          <Pickup className="w-[24px] h-[24px] md:w-[36px] md:h-[37px]" />
        </div>
        <div className="flex flex-col gap-[8px]">
          <h3 className="text-[#536524] leading-[16.8px] font-medium md:text-[16px] md:leading-[19.2px]">
            Free delivery on orders over $15
          </h3>
          <p className="leading-[16.8px] md:text-[16px] md:w-[570px]">
            Indulge in your favorite dishes from Tasty Go and enjoy the added
            perk of free delivery when your order totals $50 or more.
          </p>
        </div>
      </li>

      <li className="flex items-start gap-[12px]">
        <div className="flex items-center justify-center p-[8px] border border-solid border-[#010101] rounded-[50%]">
          <Doorstep className="w-[24px] h-[24px] md:w-[36px] md:h-[37px]" />
        </div>
        <div className="flex flex-col gap-[8px]">
          <h3 className="text-[#536524] leading-[16.8px] font-medium md:text-[16px] md:leading-[19.2px]">
            Free delivery on orders over $15
          </h3>
          <p className="leading-[16.8px] md:text-[16px] md:w-[570px]">
            Indulge in your favorite dishes from Tasty Go and enjoy the added
            perk of free delivery when your order totals $50 or more.
          </p>
        </div>
      </li>
    </ul>
  );
};

export default AdvantagesList;
