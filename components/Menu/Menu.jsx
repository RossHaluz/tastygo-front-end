import MenuBanner from "./MenuBanner";
import MenuTitle from "./MenuTitle";
import MunuCategories from "./MenuCategories";
import MunuProducts from "./MenuProducts";
import ShowMoreBtn from "./ShowMoreBtn";

const Menu = () => {
  return (
    <div>
      <MenuBanner />
      <div className="py-[32px] md:pt-[48px] md:pb-[64px] lg:pb-[80px]">
        <div className="flex flex-col gap-[24px]">
          <MunuCategories />
          <div className="container flex flex-col gap-[10px]">
            <MenuTitle />
            <MunuProducts />
          </div>
        </div>
        <ShowMoreBtn />
      </div>
    </div>
  );
};

export default Menu;
