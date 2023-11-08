import React from "react";

const Section = ({ title, subtitle, children, styles }) => {
  return (
    <section className="py-[32px] md:py-[64px] lg:py-[80px]">
      <div className={`${styles} flex flex-col gap-[16px] md:gap-[32px]`}>
        {title && subtitle && (
          <div className="flex flex-col gap-[12px] md:gap-[16px]">
            <h2 className="uppercase text-[#F9854E] md:text-[18px] md:leading-[21.6px]">
              {subtitle}
            </h2>
            {title && (
              <h3 className="text-[32px] leading-[38.4px] font-medium md:text-[40px] md:leading-[48px] lg:text-[64px] lg:leading-[70.4px]">
                {title}
              </h3>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
};

export default Section;
