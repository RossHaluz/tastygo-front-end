"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import popular_bg_mobile1x from "../../images/popular/mobile/popular-bg-mob@1x.jpg";
import popular_bg_mobile2x from "../../images/popular/mobile/popular-bg-mob@2x.jpg";
import popular_bg_tablet1x from "../../images/popular/tablet/popular-bg-tablet@1x.jpg";
import popular_bg_tablet2x from "../../images/popular/tablet/popular-bg-tablet@2x.jpg";
import popular_bg_desc1x from "../../images/popular/desc/popular-bg-desc@1x.jpg";
import popular_bg_desc2x from "../../images/popular/desc/popular-bg-desc@2x.jpg";

const PopularDishesImg = () => {
  const [isRetina, setIsRetina] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.devicePixelRatio >= 2) {
      setIsRetina(true);
    }
  }, []);

  let backgroundImageSrc = popular_bg_mobile1x;

  if (width > 320) {
    if (width > 767) {
      if (width > 1279) {
        backgroundImageSrc = isRetina ? popular_bg_desc2x : popular_bg_desc1x;
      } else {
        backgroundImageSrc = isRetina
          ? popular_bg_tablet2x
          : popular_bg_tablet1x;
      }
    } else {
      backgroundImageSrc = isRetina ? popular_bg_mobile2x : popular_bg_mobile1x;
    }
  }

  return (
    <Image
      src={backgroundImageSrc}
      alt="Popular dishes"
      priority
      className="w-full h-[450pxpx] md:h-[632px] lg:h-[744px]"
    />
  );
};

export default PopularDishesImg;
