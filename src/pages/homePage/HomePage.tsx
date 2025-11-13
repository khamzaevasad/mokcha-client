import { Statistics, PopularDishes, NewDishes } from "../index";
import HomeHero from "./HomeHero";

function HomePage() {
  return (
    <div>
      <HomeHero />
      <Statistics />
      <PopularDishes />
      <NewDishes />
    </div>
  );
}

export default HomePage;
