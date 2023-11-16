import MenuBanner from "../Menu/MenuBanner";
import MenuCategories from "../Menu/MenuCategories";
import MenuProducts from "../Menu/MenuProducts";
import MenuTitle from "../Menu/MenuTitle";

const CategoryItems = () => {
  return (
    <div>
      <MenuBanner />
      <div className="py-[32px] md:pt-[48px] md:pb-[64px] lg:pb-[80px]">
        <div className="flex flex-col gap-[24px]">
          <MenuCategories />
          <div className="container flex flex-col gap-[10px]">
            <MenuTitle />
            <MenuProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItems;
