import { Package, CheckCircle, Clock } from "lucide-react";

export function OrderHistory() {
  // TODO: Fetch finished orders from API
  const finishedOrders = [
    {
      _id: "693d4420258a9441c2dd1022",
      orderTotal: 45.5,
      orderDelivery: 5.0,
      createdAt: "2025-12-13T10:46:56.692Z",
      orderItems: [
        { itemQuantity: 2, productName: "Margherita Pizza" },
        { itemQuantity: 1, productName: "Caesar Salad" },
        { itemQuantity: 3, productName: "Garlic Bread" },
      ],
    },
    {
      _id: "693d4420258a9441c2dd1023",
      orderTotal: 32.0,
      orderDelivery: 5.0,
      createdAt: "2025-12-12T14:30:00.000Z",
      orderItems: [
        { itemQuantity: 1, productName: "Beef Burger" },
        { itemQuantity: 2, productName: "French Fries" },
      ],
    },
    {
      _id: "693d4420258a9441c2dd1024",
      orderTotal: 28.0,
      orderDelivery: 5.0,
      createdAt: "2025-12-10T09:15:00.000Z",
      orderItems: [
        { itemQuantity: 1, productName: "Chicken Wrap" },
        { itemQuantity: 1, productName: "Smoothie" },
      ],
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <Package className="w-6 h-6 text-green-600" />
        <h2 className="text-xl font-bold text-gray-900">Order History</h2>
        <span className="ml-auto bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
          {finishedOrders.length} Completed
        </span>
      </div>

      {finishedOrders.length > 0 ? (
        <div className="space-y-4">
          {finishedOrders.map((order, index) => (
            <div
              key={order._id}
              className="border border-gray-100 rounded-xl p-5 hover:border-green-200 hover:bg-green-50/30 transition-all duration-200 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Order #{order._id.slice(-6).toUpperCase()}
                    </h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3.5 h-3.5" />
                      {new Date(order.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">
                    ${order.orderTotal.toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-500">
                    +${order.orderDelivery.toFixed(2)} delivery
                  </p>
                </div>
              </div>

              <div className="pl-13">
                <ul className="space-y-2">
                  {order.orderItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <span className="w-5 h-5 rounded-md bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-700">
                        {item.itemQuantity}
                      </span>
                      <span>{item.productName}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            No Orders Yet
          </h3>
          <p className="text-gray-500">
            Your completed orders will appear here
          </p>
        </div>
      )}
    </div>
  );
}
