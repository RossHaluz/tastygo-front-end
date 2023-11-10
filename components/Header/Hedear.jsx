import HeaderLogo from "./HeaderLogo";
import Navigation from "./Navigation";
import UserNav from "./UserNav";

const Hedear = () => {
  return (
    <header className="py-[18px] md:py-[24px] lg:py-[26px]">
      <div className="flex items-center justify-between container">
        <HeaderLogo />
        <Navigation/>
        <UserNav />
      </div>
    </header>
  );
};

export default Hedear;
