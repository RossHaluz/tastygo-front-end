import ReactStars from "react-rating-stars-component";

const Reting = () => {
  return (
    <div className="flex flex-col gap-[12px] md:gap-[18px] lg:gap-[16px]">
      <p>How would you rate your experience with Tasty Go?</p>
      <ReactStars size={24} count={5} activeColor="#152F23" />
    </div>
  );
};

export default Reting;
