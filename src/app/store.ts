import { configureStore, Action } from "@reduxjs/toolkit";
import type { ThunkAction } from "@reduxjs/toolkit";
import HomePageReducer from "../pages/home/slice";
import reduxLogger from "redux-logger";
import ProductsPageReducer from "../pages/product/slice";
import ProductInfoPageReducer from "../pages/productInfo/slice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer,
    productsPage: ProductsPageReducer,
    productInfoPage: ProductInfoPageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
