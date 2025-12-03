import { useEffect } from "react";
import About from "../../components/home/About";
import Iframe from "../../components/home/Iframe";
import { PopularDishes, NewDishes, Feedback } from "../index";
import HomeHero from "./HomeHero";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPopularDishes } from "./slice";
import { Product } from "../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../lib/enums/product.enum";

/**Redux Slice & Selector**/

const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});

function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  useEffect(() => {
    const product = new ProductService();

    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "productViews",
        productCollection: ProductCollection.DISH,
      })
      .then((data) => setPopularDishes(data))
      .catch((err) => console.log(err));
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
