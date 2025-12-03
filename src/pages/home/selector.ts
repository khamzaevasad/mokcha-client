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

// export const retrievePopularDishes = createSelector(
//   selectHomePage,
//   (HomePage) => {
//     return HomePage.popularDishes;
//   }
// );
// export const retrieveNewDishes = createSelector(selectHomePage, (HomePage) => {
//   return HomePage.newDishes;
// });

// export const retrieveTopUsers = createSelector(selectHomePage, (HomePage) => {
//   return HomePage.topUsers;
// });
