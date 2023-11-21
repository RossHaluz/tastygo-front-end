import ReviewsAllForm from "./ReviewsAllForm";
import ReviewsAllList from "./ReviewsAllList";

const ReviewsAll = () => {
  return (
    <>
      <ReviewsAllList />
      <ReviewsAllForm
        title={"We value your feedback: rate and review"}
        subtitle={"*Only registered users can leave reviews"}
      />
    </>
  );
};

export default ReviewsAll;
