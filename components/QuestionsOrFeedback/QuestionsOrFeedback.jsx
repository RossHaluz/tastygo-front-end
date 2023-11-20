import Section from "../Section";
import QuestionsOrFeedbackForm from "./QuestionsOrFeedbackForm";

const QuestionsOrFeedback = ({
  title,
  subtitle,
  formStyles,
  isReting,
  styles,
}) => {
  return (
    <Section anotherStyles={"bg-[#F6F6F6]"}>
      <div className="container">
        <QuestionsOrFeedbackForm
          title={title}
          subtitle={subtitle}
          formStyles={formStyles}
          isReting={isReting}
          styles={styles}
        />
      </div>
    </Section>
  );
};

export default QuestionsOrFeedback;
