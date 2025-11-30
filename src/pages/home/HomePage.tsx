import { useEffect } from "react";
import About from "../../components/home/About";
import Iframe from "../../components/home/Iframe";
import { PopularDishes, NewDishes, Feedback } from "../index";
import HomeHero from "./HomeHero";

function HomePage() {
  // Selector: Store => Data

  useEffect(() => {
    // Backend server data request => Data
    // Slice: Data => Store
  }, []);

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
