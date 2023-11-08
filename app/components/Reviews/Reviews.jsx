import Section from "../Section";
import ReviewsSlider from "./ReviewsSlider";

const Reviews = () => {
  return (
    <Section
      title={"Our clients have a ton to say"}
      subtitle={"reviews"}
      showAll={"View all reviews"}
      stylesSection={"md:container"}
      styles={"container relative flex items-end justify-between"}
      styleShowAll={"absolute bottom-0 right-[20px] lg:right-[80px]"}
      styleTitle={"w-[312px] md:w-[502px] lg:w-[407px]"}
    >
      <ReviewsSlider />
    </Section>
  );
};

export default Reviews;
