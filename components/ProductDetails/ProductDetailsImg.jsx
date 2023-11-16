import Image from "next/image";
import ProductAddToFavorite from "./ProductAddToFavorite";

const ProductDetailsImg = ({ image, nameItem }) => {
  return (
    <div className="relative">
      <Image
        src={image}
        alt={nameItem}
        width={280}
        height={198}
        className="w-[280px] h-[198px] md:w-[1075px] md:h-[477px] mx-auto"
      />
      <ProductAddToFavorite />
    </div>
  );
};

export default ProductDetailsImg;
