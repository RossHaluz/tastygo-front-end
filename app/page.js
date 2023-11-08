import Hero from "./components/Hero/Hero";
import OurService from "./components/OurService/OurService";
import PopularDishes from "./components/PopularDishes/PopularDishes";
import Reviews from "./components/Reviews/Reviews";
import SeasonalMenu from "./components/SeasonalMenu/SeasonalMenu";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularDishes />
      <OurService />
      <SeasonalMenu />
      <Reviews />
    </>
  );
}
