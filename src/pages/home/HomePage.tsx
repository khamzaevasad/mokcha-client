import About from "../../components/home/About";
import { PopularDishes, NewDishes, Feedback } from "../index";
import HomeHero from "./HomeHero";

function HomePage() {
  return (
    <div>
      <HomeHero />
      <About />
      <PopularDishes />
      <NewDishes />
      <Feedback />
    </div>
  );
}

export default HomePage;
