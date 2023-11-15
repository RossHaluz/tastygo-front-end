"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import bg_menu_mobile1x from "../../public/images/menu/mobile/bg-menu-mobile@1x.jpg";
import bg_menu_mobile2x from "../../public/images/menu/mobile/bg-menu-mobile@2x.jpg";
import bg_menu_tablet1x from "../../public/images/menu/tablet/bg-menu-tablet@1x.jpg";
import bg_menu_tablet2x from "../../public/images/menu/tablet/bg-menu-tablet@2x.jpg";
import bg_menu_desc1x from "../../public/images/menu/desc/bg-menu-desc@1x.jpg";
import bg_menu_desc2x from "../../public/images/menu/desc/bg-menu-desc@2x.jpg";

const MenuBannerImg = () => {
  const [width, setWidth] = useState(null);
  const [isRetina, setIsRetina] = useState(false);

  useEffect(() => {
    const handleCurrentWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleCurrentWidth);
    handleCurrentWidth();

    return () => {
      window.removeEventListener("resize", handleCurrentWidth);
    };
  }, []);

  useEffect(() => {
    if (window.devicePixelRatio >= 2) {
      setIsRetina(true);
    }
  });

  let currentImg = bg_menu_mobile1x;

  if (width > 320) {
    if (width > 768) {
      if (width > 1280) {
        currentImg = isRetina ? bg_menu_desc2x : bg_menu_desc1x;
      } else {
        currentImg = isRetina ? bg_menu_tablet2x : bg_menu_tablet1x;
      }
    } else {
      currentImg = isRetina ? bg_menu_mobile2x : bg_menu_mobile1x;
    }
  }

  return <Image src={currentImg} alt="Menu bg" className="h-full w-full" />;
};

export default MenuBannerImg;
