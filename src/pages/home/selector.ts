import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../lib/types/screen";
const selectHomePage = (state: AppRootState) => {
  return state.homePage;
};

export const retrieveHomePage = createSelector(selectHomePage, (homePage) => {
  return {
    popularDishes: homePage.popularDishes,
    newDishes: homePage.newDishes,
    topUsers: homePage.topUsers,
  };
});
