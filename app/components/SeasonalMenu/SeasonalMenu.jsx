import Section from "../Section";
import SeasonaMenuSlider from "./SeasonaMenuSlider";

const SeasonalMenu = () => {
  return (
    <Section
      styles={"container flex items-end justify-between"}
      subtitle={"SEASONal MENU"}
      title={"Try dishes from our seasonal menu"}
      stylesSection={"md:container"}
      showAll={"View menu"}
      styleTitle={"w-[312px] md:w-[375px] lg:w-[600px]"}
      styleShowAll={"hidden md:flex"}
    >
      <SeasonaMenuSlider />
    </Section>
  );
};

export default SeasonalMenu;
