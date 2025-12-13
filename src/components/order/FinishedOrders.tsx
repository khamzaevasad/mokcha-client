import { X, Plus, Clock } from "lucide-react";

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Order {
  id: number;
  items: OrderItem[];
  deliveryCost: number;
  pausedAt: Date;
}

function FinishedOrders() {
  const orders: Order[] = [
    {
      id: 1,
      items: [
        {
          name: "Grilled Steak",
          price: 10,
          quantity: 2,
          image: "/img/fresh.webp",
        },
        {
          name: "Caesar Salad",
          price: 8,
          quantity: 1,
          image: "/img/fresh.webp",
        },
        {
          name: "French Fries",
          price: 5,
          quantity: 3,
          image: "/img/fresh.webp",
        },
      ],
      deliveryCost: 5,
      pausedAt: new Date(Date.now() - 3600000),
    },
    {
      id: 2,
      items: [
        {
          name: "Margherita Pizza",
          price: 15,
          quantity: 1,
          image: "/img/fresh.webp",
        },
        {
          name: "Garlic Bread",
          price: 6,
          quantity: 2,
          image: "/img/fresh.webp",
        },
      ],
      deliveryCost: 5,
      pausedAt: new Date(Date.now() - 7200000),
    },
  ];

  const calculateSubtotal = (items: OrderItem[]): number => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const calculateTotal = (items: OrderItem[], deliveryCost: number): number => {
    return calculateSubtotal(items) + deliveryCost;
  };
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {orders.length > 0 ? (
        <div className="space-y-5">
          {orders.map((order) => {
            const subtotal = calculateSubtotal(order.items);
            const total = calculateTotal(order.items, order.deliveryCost);

            return (
              <div
                key={order.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                {/* Header with status badge */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 px-6 py-3 border-b border-blue-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-green-800">
                      Paused Order #{order.id}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {order.pausedAt.toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>

                {/* Order items */}
                <div className="p-6">
                  <div className="space-y-4">
                    {order.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                      >
                        {/* Left: Image + Details */}
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <img
                              src={item.image}
                              className="w-16 h-16 rounded-xl object-cover shadow-sm"
                              alt={item.name}
                            />
                            <div className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                              {item.quantity}
                            </div>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              ${item.price.toFixed(2)} each
                            </p>
                          </div>
                        </div>

                        {/* Right: Calculation */}
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                          <span className="text-gray-500">${item.price}</span>
                          <X size={12} className="text-gray-400" />
                          <span className="text-gray-500">{item.quantity}</span>
                          <span className="text-gray-400">=</span>
                          <span className="font-bold text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Summary section */}
                  <div className="mt-6 pt-4 border-t-2 border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4">
                      {/* Cost breakdown */}
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
                            ${order.deliveryCost.toFixed(2)}
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
            No Paused Orders
          </h3>
          <p className="text-gray-500 text-center max-w-md">
            All orders are currently being processed. Paused orders will appear
            here.
          </p>
        </div>
      )}
    </div>
  );
}

export default FinishedOrders;
