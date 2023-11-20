import Section from "../Section";
import FaqImg from "./FaqImg";
import QuestionAndAnswer from "./QuestionAndAnswer";

const Faq = () => {
  return (
    <Section title={"FAQ"} anotherStyles={"container"}>
      <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:gap-[32px] lg:grid-rows-1 gap-[28.5px] md:gap-[24px]">
        <FaqImg />
        <QuestionAndAnswer />
      </div>
    </Section>
  );
};

export default Faq;
