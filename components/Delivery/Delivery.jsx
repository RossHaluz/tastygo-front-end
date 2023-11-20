import QuestionsOrFeedback from "@/components/QuestionsOrFeedback/QuestionsOrFeedback";
import Advantages from "../Advantages/Advantages";
import Payment from "../Payment/Payment";
import Faq from "../Faq/Faq";

const Delivery = () => {
  return (
    <div>
      <Advantages />
      <Payment />
      <Faq />
      <QuestionsOrFeedback title={" Have questions? Ask us!"} />
    </div>
  );
};

export default Delivery;
