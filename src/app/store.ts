import { configureStore, Action } from "@reduxjs/toolkit";
import type { ThunkAction } from "@reduxjs/toolkit";
import HomePageReducer from "../pages/home/slice";

export const store = configureStore({
  reducer: {
    homePage: HomePageReducer,
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
