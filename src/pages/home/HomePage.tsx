import { useEffect } from "react";
import About from "../../components/home/About";
import Iframe from "../../components/home/Iframe";
import { PopularDishes, NewDishes, Feedback } from "../index";
import HomeHero from "./HomeHero";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../lib/types/product";

/**Redux Slice & Selector**/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});

/**
function actionDispatch(dispatch: Dispatch) {
return {
setPopularDishes: function (data: Product[]) {
return dispatch(setPopularDishes(data));
},
};
} 
 **/

const popularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes })
);

/**
const popularDishes = useSelector(function (state: RootState) {
return retrievePopularDishes(state).popularDishes
? retrievePopularDishes(state).popularDishes
: retrievePopularDishes(state);
}); 
**/

function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetriever);
  // Selector: Store => Data

  useEffect(() => {
    // Backend server data request => Data
    const result = [
      {
        _id: "690a3ebe00ed3ec5f06abb80",
        productStatus: "PAUSE",
        productCollection: "DISH",
        productName: "Xonim",
        productPrice: 13,
        productLeftCount: 100,
        productSize: "NORMAL",
        productVolume: 1,
        productDesc: "Delicious ",
        productImages: [
          "uploads/products/5729801a-5000-4f29-bee0-2baefdb04b24.jpg",
        ],
        productViews: 0,
        createdAt: "2025-11-04T17:58:22.556Z",
        updatedAt: "2025-11-04T17:58:22.556Z",
        __v: 0,
      },
      {
        _id: "690a3de93df192a92d74e1b6",
        productStatus: "PAUSE",
        productCollection: "DRINK",
        productName: "Juice",
        productPrice: 4,
        productLeftCount: 198,
        productSize: "NORMAL",
        productVolume: 1,
        productDesc: "This is good Drink",
        productImages: [
          "uploads/products/c015d4a1-7475-40a6-b3e9-da23c953651b.png",
        ],
        productViews: 0,
        createdAt: "2025-11-04T17:54:49.034Z",
        updatedAt: "2025-11-30T09:46:28.360Z",
        __v: 0,
      },
    ];

    // Slice: Data => Store
    //@ts-ignore
    setPopularDishes(result);
  }, []);

  console.log("popularDishes", popularDishes);

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
