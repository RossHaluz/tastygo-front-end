const QuestionsOrFeedbackTitle = ({ title, subtitle }) => {
  return (
    <>
      {title && subtitle ? (
        <div className="flex flex-col gap-[8px] md:gap-[24px]">
          <h2 className="text-[32px] font-medium leading-[38.4px] w-[310px] md:text-[64px] md:leading-[70.4px] md:w-[620px] lg:w-[518px]">
            {title}
          </h2>
          <p className="leading-[16.8px] md:text-[18px] md:leading-[21.6px]">
            *Only registered users can leave reviews
          </p>
        </div>
      ) : (
        <h2 className="text-[32px] font-medium leading-[38.4px] w-[310px] md:text-[64px] md:leading-[70.4px] md:w-[620px] lg:w-[411px]">
          {title}
        </h2>
      )}
    </>
  );
};

export default QuestionsOrFeedbackTitle;
