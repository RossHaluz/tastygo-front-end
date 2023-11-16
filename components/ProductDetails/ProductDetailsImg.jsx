import Image from "next/image";

const ProductDetailsImg = ({ image, nameItem }) => {
  return (
    <Image
      src={image}
      alt={nameItem}
      width={280}
      height={198}
      className="w-[280px] h-[198px] mx-auto"
    />
  );
};

export default ProductDetailsImg;
