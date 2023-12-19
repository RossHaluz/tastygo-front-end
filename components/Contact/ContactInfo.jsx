import Calendar from "../../public/images/calendar/calendar.svg";
import Phone from "../../public/images/phone/phone.svg";
import Navigation from "../../public/images/navigation/navigation.svg";
import Arrow from "../../public/images/arrow/arrow-up.svg";
import Link from "next/link";

const ContactInfo = () => {
  const phoneNumber = "+380980001122";

  return (
    <div className="py-[36px] w-full px-[24px] md:p-[48px] bg-[#DCDED0] rounded-[8px] flex flex-col lg:flex-row lg:items-end gap-[16px] md:gap-[32px]">
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[12px]">
          <h2 className="leading-[16.8px] md:text-[18px] md:leading-[21.6px] uppercase">
            contacts
          </h2>
          <h3 className="text-[32px] font-medium leading-[38.4px] md:text-[40px] md:leading-[48px] lg:text-[64px] lg:leading-[70.4px]">
            You can find us at the adress
          </h3>
        </div>

        <div className="flex flex-col gap-[12px]">
          <div className="flex items-center gap-[16px]">
            <Navigation />
            <p className="leading-[16.8px] md:text-[16px]">
              Kyiv, st. Shevchenka, 98
            </p>
          </div>

          <div className="flex items-center gap-[16px]">
            <Phone />
            <p className="leading-[16.8px] md:text-[16px]">
              +38 (098) 000-11-22
            </p>
          </div>

          <div className="flex items-center gap-[16px]">
            <Calendar />
            <p className="leading-[16.8px] md:text-[16px]">
              Sun - Mon 10:00 - 22:00
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:mx-auto gap-[12px]">
        <Link
          href={`tel:${phoneNumber}`}
          className="flex items-center md:flex-col-reverse md:items-start md:w-[262px] md:h-[262px] justify-between px-[16px] py-[16px] md:p-[24px] border border-solid border-[#010101] rounded-[20px] font-medium leading-[16.8px] md:text-[16px] md:leading-[19.2px]"
        >
          {phoneNumber}
          <Arrow className="fill-[#010101] md:ml-auto w-[46px] h-[46px] md:w-[64px] md:h-[64px]" />
        </Link>

        <Link
          href="/"
          className="flex items-center md:flex-col-reverse md:items-start md:w-[262px] md:h-[262px] justify-between px-[16px] py-[16px] md:p-[24px] border border-solid border-[#010101] rounded-[20px] font-medium leading-[16.8px] md:text-[16px] md:leading-[19.2px]"
        >
          View in google maps
          <Arrow className="fill-[#010101] md:ml-auto w-[46px] h-[46px] md:w-[64px] md:h-[64px]" />
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
