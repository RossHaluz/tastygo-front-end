import MenuBanner from "./MenuBanner";
import MenuTitle from "./MenuTitle";
import MunuCategories from "./MunuCategories";
import MunuProducts from "./MunuProducts";

const Menu = () => {
  return (
    <div>
      <MenuBanner />

      <div className="py-[32px] flex flex-col gap-[24px]">
        <MunuCategories />
        <div className="container flex flex-col gap-[10px]">
          <MenuTitle />
          <MunuProducts />
        </div>
      </div>
    </div>
  );
};

export default Menu;
