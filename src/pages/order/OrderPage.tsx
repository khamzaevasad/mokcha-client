import FinishedOrders from "../../components/order/FinishedOrders";
import PausedOrders from "../../components/order/PausedOrders";
import ProcessOrder from "../../components/order/ProcessOrders";

function OrderPage() {
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
