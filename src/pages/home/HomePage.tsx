import About from "../../components/home/About";
import Iframe from "../../components/home/Iframe";
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
      <Iframe />
    </div>
  );
}

export default HomePage;
