import MenuBannerImg from "./MenuBannerImg";

const MenuBanner = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
      <div className="py-[59px] px-[23px] bg-[#DCDED0] flex items-center md:px-[20px] md:py-[128px] lg:px-[70px] lg:py-[85px]">
        <h2 className="text-[32px] font-medium leading-[38.4px] w-[312px] md:w-[364px] md:text-[40px] md:leading-[48px] lg:text-[64px] lg:leading-[70.4px] lg:w-[582px]">
          Our choice - organic products for your dishes
        </h2>
      </div>
      <MenuBannerImg />
    </div>
  );
};

export default MenuBanner;
