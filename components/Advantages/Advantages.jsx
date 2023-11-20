import Section from "../Section";
import AdvantagesImg from "./AdvantagesImg";
import AdvantagesList from "./AdvantagesList";

const Advantages = () => {
  return (
    <Section title={"Delivery"} anotherStyles={"container"}>
      <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-2 lg:items-start">
        <AdvantagesList />
        <AdvantagesImg />
      </div>
    </Section>
  );
};

export default Advantages;
