import QuestionsOrFeedback from "@/components/QuestionsOrFeedback/QuestionsOrFeedback";
import Advantages from "../Advantages/Advantages";
import Payment from "../Payment/Payment";
import Faq from "../Faq/Faq";
import Breadcrumbs from "../Breadcrumbs";

const Delivery = () => {
  return (
    <div>
      <div className="py-[16px] md:py-[24px]">
        <Breadcrumbs
          homeElement={"Home"}
          separator={<span> / </span>}
          activeClasses="text-[#B7B7B7]"
          containerClasses="flex items-center gap-[4px] text-[12px] text-[#010101] leading-[14.4px] container"
          capitalizeLinks
        />
      </div>
      <Advantages />
      <Payment />
      <Faq />
      <QuestionsOrFeedback title={" Have questions? Ask us!"} />
    </div>
  );
};

export default Delivery;
