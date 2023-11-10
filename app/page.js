import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import OurService from "../components/OurService/OurService";
import PopularDishes from "../components/PopularDishes/PopularDishes";
import Reviews from "../components/Reviews/Reviews";
import SeasonalMenu from "../components/SeasonalMenu/SeasonalMenu";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <PopularDishes />
      <OurService />
      <SeasonalMenu />
      <Reviews />
      <Contact />
    </Layout>
  );
}
