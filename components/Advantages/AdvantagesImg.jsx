"use client";
import advantages_bg_mobile1x from "../../public/images/advantages/bg/mobile/advantages_bg_mobile@1x.jpg";
import advantages_bg_mobile2x from "../../public/images/advantages/bg/mobile/advantages_bg_mobile@2x.jpg";
import advantages_bg_tablet1x from "../../public/images/advantages/bg/tablet/advantages_bg_tablet@1x.jpg";
import advantages_bg_tablet2x from "../../public/images/advantages/bg/tablet/advantages_bg_tablet@2x.jpg";
import advantages_bg_desc1x from "../../public/images/advantages/bg/desc/advantages_bg_desc@1x.jpg";
import advantages_bg_desc2x from "../../public/images/advantages/bg/desc/advantages_bg_desc@2x.jpg";
import { useEffect, useState } from "react";
import Image from "next/image";

const AdvantagesImg = () => {
  const [width, setWidth] = useState(null);
  const [isRetina, setIsRetina] = useState(false);

  useEffect(() => {
    const handleDeviseWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleDeviseWidth);
    handleDeviseWidth();

    return () => {
      window.removeEventListener("resize", handleDeviseWidth);
    };
  }, []);

  useEffect(() => {
    if (window.devicePixelRatio >= 2) {
      setIsRetina(true);
    }
  }, []);

  let currentImg = advantages_bg_mobile1x;

  if (width > 319) {
    if (width > 767) {
      if (width > 1279) {
        currentImg = isRetina ? advantages_bg_desc2x : advantages_bg_desc1x;
      } else {
        currentImg = isRetina ? advantages_bg_tablet2x : advantages_bg_tablet1x;
      }
    } else {
      currentImg = isRetina ? advantages_bg_mobile2x : advantages_bg_mobile1x;
    }
  }

  return (
    <Image
      src={currentImg}
      alt="Advantages image"
      className="rounded-[10px] lg:h-[450px]"
    />
  );
};

export default AdvantagesImg;
