import Section from "../Section";
import OurServiceList from "./OurServiceList";

const OurService = () => {
  return (
    <Section
      title={"We will take care of your nutrition"}
      subtitle={"OUR SERVICES"}
      styles={"container"}
    >
      <OurServiceList />
    </Section>
  );
};

export default OurService;
