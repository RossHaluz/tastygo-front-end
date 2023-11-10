import Section from "../Section";
import ReviewsDesc from "./ReviewsDesc";
import ReviewsSlider from "./ReviewsSlider";

const Reviews = () => {
  return (
    <>
      <Section
        title={"Our clients have a ton to say"}
        subtitle={"reviews"}
        showAll={"View all reviews"}
        stylesSection={"md:container"}
        styles={"container relative flex items-end justify-betwee"}
        styleShowAll={"absolute bottom-0 right-[20px] lg:right-[80px] lg:top-0"}
        styleTitle={"w-[312px] md:w-[502px] lg:w-[407px]"}
        anotherStyles={"lg:hidden"}
      >
        <ReviewsSlider />
      </Section>
      <ReviewsDesc />
    </>
  );
};

export default Reviews;
