import Plus from "../../public/images/count/plus/plus.svg";
import Minus from "../../public/images/count/minus/minus.svg";
import clsx from "clsx";

const NutritionalValue = ({
  characteristics,
  nutritionalValue,
  setNutritionalValue,
}) => {
  const characteristicsParse = JSON.parse(characteristics);
  console.log(characteristicsParse);
  return (
    <div
      className={clsx("bg-[#F6F6F6] rounded-[20px]", {
        "px-[24px] py-[10.5px]": !nutritionalValue,
        "px-[16px] py-[24px]": nutritionalValue,
      })}
    >
      <div className="flex flex-col gap-[18.5px]">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-medium leading-[19.2px]">
            Nutritional value
          </h3>
          {nutritionalValue ? (
            <button
              type="button"
              onClick={() => setNutritionalValue((prev) => !prev)}
            >
              <Minus className="w-[24px] h-[24px]" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setNutritionalValue((prev) => !prev)}
            >
              <Plus className="w-[24px] h-[24px]" />
            </button>
          )}
        </div>
        {characteristicsParse?.length && nutritionalValue > 0 && (
          <div className="flex flex-col gap-[12px]">
            {characteristicsParse?.map(({ name, option }) => {
              return (
                <div
                  key={name}
                  className="flex items-center justify-between leading-[16.8px]"
                >
                  <h3>{name}</h3>
                  <span>{option}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default NutritionalValue;
