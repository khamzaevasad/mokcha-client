import PopularDishes from "../../components/homeComponents/PopularDishes";
import Statistics from "../../components/homeComponents/Statistics";
import HomeHero from "./HomeHero";

function HomePage() {
  return (
    <div>
      <HomeHero />
      <Statistics />
      <PopularDishes />
    </div>
  );
}

export default HomePage;
