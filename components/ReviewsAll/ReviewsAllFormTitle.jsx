const ReviewsAllFormTitle = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-[8px] md:gap-[24px]">
      <h2 className="text-[32px] font-medium leading-[38.4px] w-[310px] md:text-[64px] md:leading-[70.4px] md:w-[620px] lg:w-[518px]">
        {title}
      </h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default ReviewsAllFormTitle;
