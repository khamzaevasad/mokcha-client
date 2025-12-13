import { Dispatch } from "@reduxjs/toolkit";
import FinishedOrders from "../../components/order/FinishedOrders";
import PausedOrders from "../../components/order/PausedOrders";
import ProcessOrder from "../../components/order/ProcessOrders";
import { Order } from "../../lib/types/orders";
import { setFinishedOrders, setPausedOrders, setProcessOrders } from "./slice";
import { useDispatch } from "react-redux";

/**Redux Slice & Selector**/

const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
});

function OrderPage() {
  const { setPausedOrders, setProcessOrders, setFinishedOrders } =
    actionDispatch(useDispatch());

  return (
    <div className="align-elements my-10">
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-foreground font-bold"
          aria-label="Paused orders"
          defaultChecked
        />
        <div className="tab-content bg-background p-1">
          <PausedOrders />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-foreground font-bold"
          aria-label="Process orders"
        />
        <div className="tab-content p-1">
          <ProcessOrder />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-foreground font-bold"
          aria-label="Finished orders"
        />
        <div className="tab-content p-1">
          <FinishedOrders />
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
