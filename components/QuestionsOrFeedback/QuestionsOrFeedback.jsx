import Section from "../Section";
import QuestionsOrFeedbackForm from "./QuestionsOrFeedbackForm";

const QuestionsOrFeedback = ({ title, subtitle, rating }) => {
  return (
    <Section anotherStyles={"bg-[#F6F6F6]"}>
      <div className="container">
        <QuestionsOrFeedbackForm />
      </div>
    </Section>
  );
};

export default QuestionsOrFeedback;
