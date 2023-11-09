"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import contact_bg_mobile1x from "../../images/contact/mobile/contact-bg-mobile@1x.jpg";
import contact_bg_mobile2x from "../../images/contact/mobile/contact-bg-mobile@2x.jpg";
import contact_bg_tablet1x from "../../images/contact/tablet/contact-bg-tablet@1x.jpg";
import contact_bg_tablet2x from "../../images/contact/tablet/contact-bg-tablet@2x.jpg";
import contact_bg_desc1x from "../../images/contact/desc/contct-bg-desc@1x.jpg";
import contact_bg_desc2x from "../../images/contact/desc/contct-bg-desc@2x.jpg";

const ContactImg = () => {
  const [isRetina, setIsRetina] = useState(false);
  const [width, setWidth] = useState(null);

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

  let contactBgImg = contact_bg_mobile1x;

  if (width > 320) {
    if (width > 768) {
      if (width > 1440) {
        contactBgImg = isRetina ? contact_bg_desc2x : contact_bg_desc1x;
      } else {
        contactBgImg = isRetina ? contact_bg_tablet2x : contact_bg_tablet1x;
      }
    } else {
      contactBgImg = isRetina ? contact_bg_mobile2x : contact_bg_mobile1x;
    }
  }

  return (
    <Image
      src={contactBgImg}
      alt="Contact bg"
      priority
      className="w-full h-full md:h-[442px] lg:h-[770px]"
    ></Image>
  );
};

export default ContactImg;
