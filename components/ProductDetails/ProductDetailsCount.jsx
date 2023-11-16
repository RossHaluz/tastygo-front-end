import Plus from "../../public/images/count/plus/plus.svg";
import Minus from "../../public/images/count/minus/minus.svg";

const ProductDetailsCount = () => {
  return (
    <div className="flex items-center">
      <button className="p-[10px] flex items-center justify-center">
        <Minus className="w-[24px] h-[24px]" />
      </button>
      <div className="p-[10px] border-b border-[#010101]">1</div>
      <button className="p-[10px] flex items-center justify-center">
        <Plus className="w-[24px] h-[24px]" />
      </button>
    </div>
  );
};

export default ProductDetailsCount;
