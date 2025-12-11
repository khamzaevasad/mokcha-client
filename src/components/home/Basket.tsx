import { useState } from "react";
import { ShoppingCart, X } from "lucide-react";
import { serverApi } from "../../lib/config";
import { useApp } from "../../hooks/useApp";

export default function Basket() {
  const { cartItems } = useApp();

  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* CART ICON */}
      <button
        className="relative p-2 cursor-pointer hover:opacity-80 rounded-full transition"
        onClick={() => setOpen(!open)}
      >
        <ShoppingCart className="w-6 h-6 text-primary" />
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">
            {cartItems.length}
          </span>
        )}
      </button>
      {/* CART DROPDOWN */}
      {open && (
        <div
          className={`
      bg-white shadow-xl rounded-2xl border border-gray-100 z-50 animate-fadeIn
      w-80 mt-2
      absolute right-0
      max-sm:fixed max-sm:top-20 max-sm:left-1/2 max-sm:-translate-x-1/2
    `}
        >
          <div className="p-4">
            {cartItems.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                🛒 Cart is empty!
              </div>
            ) : (
              <>
                <div className="max-h-72 overflow-y-auto divide-y divide-gray-100">
                  {cartItems.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-center py-4 gap-3"
                    >
                      {/* Remove button */}
                      <button className="text-gray-400 hover:text-red-500 transition">
                        <X size={17} />
                      </button>

                      {/* Image */}
                      <img
                        src={`${serverApi}/${item.image}`}
                        alt={item.name}
                        className="w-14 h-14 object-cover rounded-xl shadow-sm"
                      />

                      {/* Name + price */}
                      <div className="flex-1 text-primary">
                        <p className="font-semibold text-base">{item.name}</p>
                        <p className="text-sm text-gray-600">
                          ${item.price} × {item.quantity}
                        </p>
                      </div>

                      {/* Quantity control */}
                      <div className="flex items-center gap-2">
                        <button
                          className="w-8 h-8 flex items-center justify-center
                    bg-gray-100 hover:bg-gray-200 text-primary rounded-lg transition"
                        >
                          −
                        </button>
                        <button
                          className="w-8 h-8 flex items-center justify-center
                    bg-primary text-white rounded-lg hover:opacity-90 transition"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer section */}
                <div className="border-t pt-4 mt-4 flex items-center justify-between">
                  <span className="font-bold text-lg text-gray-800">
                    Total:
                  </span>

                  <button
                    className="
              px-4 py-2 bg-primary text-white font-medium rounded-xl
              shadow hover:opacity-90 transition
            "
                  >
                    Order
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
