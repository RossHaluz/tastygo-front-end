'use client'
import { useEffect, useState } from 'react';
import HeroTitle from './HeroTitle';
import HeroLink from './HeroLink';
import Image from 'next/image';
import hero_bg_mobile_1x from '../../images/hero/mobile/hero-mob@1x.jpg';
import hero_bg_mobile_2x from '../../images/hero/mobile/hero-mob@2x.jpg';
import hero_bg_tablet_1x from '../../images/hero/tablet/hero-tablet@1x.jpg';
import hero_bg_tablet_2x from '../../images/hero/tablet/hero-tablet@2x.jpg';
import hero_bg_desc_1x from '../../images/hero/desc/hero-desc@1x.jpg';
import hero_bg_desc_2x from '../../images/hero/desc/hero-desc@2x.jpg';

const Hero = () => {
  const [isRetina, setIsRetina] = useState(false);
  const [width, setWidth] = useState(0);


useEffect(() => {
  function handleResize() {
    setWidth(window.innerWidth)
  }
  
  window.addEventListener('resize', handleResize)
  
  handleResize()
  
  return () => {
    window.removeEventListener('resize', handleResize)
  };
}, []);

  useEffect(() => {
    if (window && window.devicePixelRatio >= 2) {
      setIsRetina(true);
    }
  }, []);

  let backgroundImageSrc = hero_bg_mobile_1x; // Значення за замовчуванням для мобільного

  if (width > 320) {
    if (width > 767) {
      if (width > 1279) {
        backgroundImageSrc = isRetina ? hero_bg_desc_2x : hero_bg_desc_1x;
      } else {
        backgroundImageSrc = isRetina ? hero_bg_tablet_2x : hero_bg_tablet_1x;
      }
    } else {
      backgroundImageSrc = isRetina ? hero_bg_mobile_2x : hero_bg_mobile_1x;
    }
  }

  return (
    <div className="relative">
  <div className="w-full backdrop-blur-md bg-gradient-to-b from-[rgba(21,47,35,0.3)] via-[rgba(21,47,35,0.3)] to-[rgba(21,47,35,0.0)]">
    <Image 
      src={backgroundImageSrc}
      alt="Hero background"
      priority
      className='w-full h-full'
    />
  </div>
  <div className={`flex flex-col gap-[16px] absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-[52px] md:-translate-y-[48px] lg:-translate-y-[62px]`}>
    <HeroTitle />
    <HeroLink />
  </div>
</div>

  );
};

export default Hero;
