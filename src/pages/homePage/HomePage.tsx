import { Statistics, PopularDishes, NewDishes, Feedback } from "../index";
import HomeHero from "./HomeHero";

function HomePage() {
  return (
    <div>
      <HomeHero />
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Feedback />
    </div>
  );
}

export default HomePage;
