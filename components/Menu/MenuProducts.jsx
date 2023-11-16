import MunuProductItem from "./MenuProductItem";

const MenuProducts = ({ items = [] }) => {
  return (
    <ul className="grid grid-cols-1 gap-[16px] md:grid-cols-2 md:gap-[24px] lg:grid-cols-3">
      {items?.length > 0 &&
        items?.map((item) => {
          return item && <MunuProductItem item={item} key={item?._id} />;
        })}
    </ul>
  );
};

export default MenuProducts;
