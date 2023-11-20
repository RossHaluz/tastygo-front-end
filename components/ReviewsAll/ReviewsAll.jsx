import QuestionsOrFeedback from "../QuestionsOrFeedback/QuestionsOrFeedback";
import ReviewsAllList from "./ReviewsAllList";

const ReviewsAll = () => {
  return (
    <>
      <ReviewsAllList />
      <QuestionsOrFeedback
        title={"We value your feedback: rate and review"}
        subtitle={"*Only registered users can leave reviews"}
        formStyles={"gap-[32px]"}
        isReting={true}
        styles={"md:gap-[32px]"}
      />
    </>
  );
};

export default ReviewsAll;
