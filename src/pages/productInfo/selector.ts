import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../lib/types/screen";
const selectProductInfoPage = (state: AppRootState) => state.productInfoPage;

export const retrieveProductInfoPage = createSelector(
  selectProductInfoPage,
  (productInfoPage) => {
    return {
      chosenProduct: productInfoPage.chosenProduct,
      recommendedProduct: productInfoPage.recommendedProduct,
    };
  }
);
