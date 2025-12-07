import { useEffect } from "react";
import {
  PopularDishes,
  NewDishes,
  Feedback,
  HomeHero,
  Iframe,
  About,
} from "../index";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setNewDishes, setPopularDishes, setTopUsers } from "./slice";
import { Product } from "../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../lib/enums/product.enum";
import MemberService from "../../services/MemberService";
import { Member } from "../../lib/types/member";

/**Redux Slice & Selector**/

const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
  setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
  setTopUsers: (data: Member[]) => dispatch(setTopUsers(data)),
});

function HomePage() {
  const { setPopularDishes, setNewDishes, setTopUsers } = actionDispatch(
    useDispatch()
  );

  useEffect(() => {
    const product = new ProductService();
    const member = new MemberService();

    // popular dishes
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "productViews",
        productCollection: ProductCollection.DISH,
      })
      .then((data) => setPopularDishes(data))
      .catch((err) => console.log(err));

    // fresh menu
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "createdAt",
        productCollection: ProductCollection.DISH,
      })
      .then((data) => setNewDishes(data))
      .catch((err) => console.log(err));

    // getTopUsers
    member
      .getTopUsers()
      .then((data) => setTopUsers(data))
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
