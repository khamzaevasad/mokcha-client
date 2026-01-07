import { useSelector } from "react-redux";
import { retrieveOrdersPage } from "../../pages/order/selector";
import { Order, OrderUpdateInput } from "../../lib/types/orders";
import { Messages, serverApi } from "../../lib/config";
import { CheckSquare, Clock, Plus, X } from "lucide-react";
import { useApp } from "../../hooks/useApp";
import { OrderStatus } from "../../lib/enums/order.enum";
import OrderService from "../../services/OrderService";
import { showError } from "../../utils/toastService";
import { T } from "../../lib/types/common";

type TabType = "paused" | "process" | "finished";

interface ProcessOrdersProps {
  setActiveTab: (tab: TabType) => void;
}
function ProcessOrder({ setActiveTab }: ProcessOrdersProps) {
  const { authMember, setOrderBuilder } = useApp();
  const { processOrders } = useSelector(retrieveOrdersPage);

  // handlers

  const finishOrderHandler = async (e: T) => {
    try {
      if (!authMember) throw new Error(Messages.error2);
      // Payment Process
      const orderId = e.target.value;
      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.FINISH,
      };
      const confirmation = window.confirm("Have you received your order?");
      if (confirmation) {
        const order = new OrderService();
        await order.updateOrder(input);
        setActiveTab("finished");
        setOrderBuilder(new Date());
      }
    } catch (err: any) {
      console.log(err);
      const msg =
        err?.response?.data?.message ??
        err?.response?.data ??
        err?.message ??
        "It seems an unknown error has occurred";

      showError(String(msg));
    }
  };

  const calculateSubtotal = (order: Order): number => {
    return order.orderItems.reduce(
      (sum, item) => sum + item.itemPrice * item.itemQuantity,
      0
    );
  };

  const calculateTotal = (order: Order): number => {
    return calculateSubtotal(order) + order.orderDelivery;
  };

  const getProductImage = (orderId: string, productId: string) => {
    const order = processOrders.find((o: Order) => o._id === orderId);
    const product = order?.productData?.find((p) => p._id === productId);
    return product?.productImages?.[0]
      ? `${serverApi}/${product.productImages[0]}`
      : "/img/fresh.webp";
  };

  const getProductName = (orderId: string, productId: string) => {
    const order = processOrders.find((o: Order) => o._id === orderId);
    const product = order?.productData?.find((p) => p._id === productId);
    return product?.productName || "Unknown Product";
  };
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {processOrders.length > 0 ? (
        <div className="space-y-5">
          {processOrders?.map((order: Order, index: number) => {
            const subtotal = calculateSubtotal(order);
            const total = calculateTotal(order);

            return (
              <div
                key={order._id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-green-50 to-blue-50 px-6 py-3 border-b border-blue-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-green-800">
                      Paused Order #{index + 1}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {new Date(order.createdAt).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    {order.orderItems.map((item) => {
                      const productName = getProductName(
                        order._id,
                        item.productId
                      );
                      const productImage = getProductImage(
                        order._id,
                        item.productId
                      );

                      return (
                        <div
                          key={item._id}
                          className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                        >
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              <img
                                src={productImage}
                                className="w-16 h-16 rounded-xl object-cover shadow-sm"
                                alt={productName}
                              />
                              <div className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                {item.itemQuantity}
                              </div>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800">
                                {productName}
                              </p>
                              <p className="text-sm text-gray-500">
                                ${item.itemPrice.toFixed(2)} each
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            <span className="text-gray-500">
                              ${item.itemPrice}
                            </span>
                            <X size={12} className="text-gray-400" />
                            <span className="text-gray-500">
                              {item.itemQuantity}
                            </span>
                            <span className="text-gray-400">=</span>
                            <span className="font-bold text-gray-900">
                              ${(item.itemPrice * item.itemQuantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 pt-4 border-t-2 border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-600">Subtotal</span>
                          <span className="font-semibold text-gray-900">
                            ${subtotal.toFixed(2)}
                          </span>
                        </div>
                        <Plus size={14} className="text-gray-400" />
                        <div className="flex items-center gap-2">
                          <span className="text-gray-600">Delivery</span>
                          <span className="font-semibold text-gray-900">
                            ${order.orderDelivery.toFixed(2)}
                          </span>
                        </div>
                        <span className="text-gray-400">=</span>
                        <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-lg">
                          <span className="text-gray-700 font-medium">
                            Total
                          </span>
                          <span className="font-bold text-lg text-gray-900">
                            ${total.toFixed(2)}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          value={order._id}
                          onClick={finishOrderHandler}
                          className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-primary-foreground font-semibold btn border-0 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 group"
                        >
                          <CheckSquare
                            size={16}
                            className="group-hover:translate-x-0.5 transition-transform"
                          />
                          Completed
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="w-48 h-48 mb-6 opacity-60 flex items-center justify-center">
            <Clock className="w-24 h-24 text-gray-300" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No Processing Orders
          </h3>
          <p className="text-gray-500 text-center max-w-md">
            There are no orders being processed at the moment. New orders will
            appear here once processing begins.
          </p>
        </div>
      )}
    </div>
  );
}

export default ProcessOrder;
