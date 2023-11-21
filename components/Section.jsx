import Link from "next/link";
import React from "react";

const Section = ({
  title,
  subtitle,
  children,
  styles,
  stylesSection,
  showAll,
  styleTitle,
  styleShowAll,
  anotherStyles,
  sortBy,
}) => {
  return (
    <section
      className={`py-[32px] md:py-[64px] lg:py-[80px] flex flex-col gap-[16px] md:gap-[36px] lg:gap-[32px] ${anotherStyles}`}
    >
      <div className={`${styles}`}>
        {title && subtitle ? (
          <div className="flex flex-col gap-[12px] md:gap-[16px]">
            <h2 className="uppercase text-[#F9854E] md:text-[18px] md:leading-[21.6px]">
              {subtitle}
            </h2>

            <h3
              className={`text-[32px] leading-[38.4px] font-medium md:text-[40px] md:leading-[48px] lg:text-[64px] lg:leading-[70.4px] ${styleTitle}`}
            >
              {title}
            </h3>
          </div>
        ) : (
          <div className="flex flex-col gap-[12px] md:gap-[16px]">
            {subtitle && (
              <h2 className="uppercase text-[#F9854E] md:text-[18px] md:leading-[21.6px]">
                {subtitle}
              </h2>
            )}

            {title && (
              <h3
                className={`text-[32px] leading-[38.4px] font-medium md:text-[40px] md:leading-[48px] lg:text-[64px] lg:leading-[70.4px] ${styleTitle}`}
              >
                {title}
              </h3>
            )}
          </div>
        )}

        {showAll && (
          <div className={`${styleShowAll} flex flex-col gap-[4px] `}>
            <Link
              href="/"
              className="md:text-[20px] md:tracking-[0.2px] text-[#536524]"
            >
              {showAll}
            </Link>
            <div className="w-full h-[1px] bg-[#536524]"></div>
          </div>
        )}

        {sortBy}
      </div>
      <div className={`${stylesSection}`}>{children}</div>
    </section>
  );
};

export default Section;
