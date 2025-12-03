import { useEffect } from "react";
import About from "../../components/home/About";
import Iframe from "../../components/home/Iframe";
import { PopularDishes, NewDishes, Feedback } from "../index";
import HomeHero from "./HomeHero";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { setPopularDishes } from "./slice";
import { retrieveHomePage, retrievePopularDishes } from "./selector";
import { Product } from "../../lib/types/product";

/**Redux Slice & Selector**/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});

function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(retrieveHomePage);

  useEffect(() => {}, []);

  console.log("popularDishes from Store", popularDishes);

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
