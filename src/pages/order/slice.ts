import { createSlice } from "@reduxjs/toolkit";
import { OrdersPageState } from "../../lib/types/screen";

const initialState: OrdersPageState = {
  pausedOrders: [],
  processOrders: [],
  finishedOrders: [],
};

const OrderPageSlice = createSlice({
  name: "orderPage",
  initialState,
  reducers: {
    setPausedOrders: (state, action) => {
      state.pausedOrders = action.payload;
    },
    setProcessOrders: (state, action) => {
      state.processOrders = action.payload;
    },
    setFinishedOrders: (state, action) => {
      state.finishedOrders = action.payload;
    },
  },
});

export const { setPausedOrders, setProcessOrders, setFinishedOrders } =
  OrderPageSlice.actions;

const OrdersPageReducer = OrderPageSlice.reducer;
export default OrdersPageReducer;
