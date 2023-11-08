import Section from "../Section";
import OurServiceList from "./OurServiceList";

const OurService = () => {
  return (
    <Section
      title={"We will take care of your nutrition"}
      subtitle={"OUR SERVICES"}
      styles={"container"}
      stylesSection={"container"}
      styleTitle={"w-[312px] md:w-full"}
    >
      <OurServiceList />
    </Section>
  );
};

export default OurService;
