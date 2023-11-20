"use client";
import { useEffect, useState } from "react";
import faq_bg_mobile1x from "../../public/images/faq/mobile/faq_bg_mobile@1x.jpg";
import faq_bg_mobile2x from "../../public/images/faq/mobile/faq_bg_mobile@2x.jpg";
import faq_bg_tablet1x from "../../public/images/faq/tablet/faq_bg_tablet@1x.jpg";
import faq_bg_tablet2x from "../../public/images/faq/tablet/faq_bg_tablet@2x.jpg";
import faq_bg_desc1x from "../../public/images/faq/desc/faq_bg_desc@1x.jpg";
import faq_bg_desc2x from "../../public/images/faq/desc/faq_bg_desc@2x.jpg";
import Image from "next/image";

const FaqImg = () => {
  const [width, setWidth] = useState(null);
  const [isRetina, setIsRetina] = useState(false);

  useEffect(() => {
    if (window.devicePixelRatio >= 2) {
      setIsRetina(true);
    }
  }, []);

  useEffect(() => {
    function handleDeviceWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleDeviceWidth);
    handleDeviceWidth();

    return () => {
      window.removeEventListener("resize", handleDeviceWidth);
    };
  }, []);

  let currentImg = faq_bg_mobile1x;

  if (width > 319) {
    if (width > 767) {
      if (width > 1279) {
        currentImg = isRetina ? faq_bg_desc2x : faq_bg_desc1x;
      } else {
        currentImg = isRetina ? faq_bg_tablet2x : faq_bg_tablet1x;
      }
    } else {
      currentImg = isRetina ? faq_bg_mobile2x : faq_bg_mobile1x;
    }
  }

  return (
    <Image
      src={currentImg}
      alt="FAQ image"
      className="rounded-[10px] h-full md:row-span-2 lg:col-start-2 lg:col-end-1 "
    />
  );
};

export default FaqImg;
