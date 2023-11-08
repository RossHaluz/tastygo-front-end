import Hero from "./components/Hero/Hero";
import OurService from "./components/OurService/OurService";
import PopularDishes from "./components/PopularDishes/PopularDishes";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularDishes />
      <OurService />
    </>
  );
}
