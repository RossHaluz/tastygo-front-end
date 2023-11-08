import Section from "../Section";
import PopularDishesImg from "./PopularDishesImg";
import PopularDishesSlider from "./PopularDishesSlider";
import PopularDishesTitle from "./PopularDishesTitle";

const PopularDishes = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <PopularDishesImg />
          <PopularDishesTitle />
        </div>
        <PopularDishesSlider />
      </div>
    </Section>
  );
};

export default PopularDishes;
