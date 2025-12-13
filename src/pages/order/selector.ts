import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../lib/types/screen";

const selectOrdersPage = (state: AppRootState) => state.ordersPage;

export const retrieveOrdersPage = createSelector(
  selectOrdersPage,
  (ordersPage) => {
    return {
      pausedOrders: ordersPage.pausedOrders,
      processOrders: ordersPage.processOrders,
      finishedOrders: ordersPage.finishedOrders,
    };
  }
);
