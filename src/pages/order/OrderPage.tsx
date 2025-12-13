import { Dispatch } from "@reduxjs/toolkit";
import FinishedOrders from "../../components/order/FinishedOrders";
import PausedOrders from "../../components/order/PausedOrders";
import ProcessOrder from "../../components/order/ProcessOrders";
import { Order, OrderInquiry } from "../../lib/types/orders";
import { setFinishedOrders, setPausedOrders, setProcessOrders } from "./slice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { OrderStatus } from "../../lib/enums/order.enum";
import OrderService from "../../services/OrderService";

/**Redux Slice & Selector**/
const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
});

function OrderPage() {
  const { setPausedOrders, setProcessOrders, setFinishedOrders } =
    actionDispatch(useDispatch());

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [orderInquiry, setOrderInquiry] = useState<OrderInquiry>({
    page: 1,
    limit: 5,
    orderStatus: OrderStatus.PAUSE,
  });

  useEffect(() => {
    const order = new OrderService();

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.PAUSE })
      .then((data) => setPausedOrders(data))
      .catch((err) => console.log(err));

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.PROCESS })
      .then((data) => setProcessOrders(data))
      .catch((err) => console.log(err));

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.FINISH })
      .then((data) => setFinishedOrders(data))
      .catch((err) => console.log(err));
  }, [orderInquiry]);

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
