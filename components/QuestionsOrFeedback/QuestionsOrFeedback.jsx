import Section from "../Section";
import QuestionsOrFeedbackForm from "./QuestionsOrFeedbackForm";

const QuestionsOrFeedback = ({
  title,
}) => {
  return (
    <Section anotherStyles={"bg-[#F6F6F6]"}>
      <div className="container">
        <QuestionsOrFeedbackForm title={title} />
      </div>
    </Section>
  );
};

export default QuestionsOrFeedback;
