import { useState } from "react";
import { ShoppingCart, X } from "lucide-react";

export default function Basket() {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Kebab",
      price: 10,
      quantity: 1,
      img: "/img/fresh.webp",
    },
    {
      id: 2,
      name: "Burger",
      price: 8,
      quantity: 2,
      img: "/img/fresh.webp",
    },
  ]);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

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
        <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-2xl border border-gray-100 z-50 animate-fadeIn">
          <div className="p-4">
            {cartItems.length === 0 ? (
              <div className="text-center text-gray-500 py-6">
                🛒 Cart is empty!
              </div>
            ) : (
              <>
                <div className="max-h-64 overflow-y-auto divide-y divide-gray-100">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center py-3">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <X size={18} />
                      </button>
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg mx-3"
                      />
                      <div className="flex-1 text-primary">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-primary">
                          ${item.price} × {item.quantity}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 py-1 bg-primary rounded cursor-pointer"
                        >
                          −
                        </button>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 py-1 bg-primary rounded cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* FOOTER */}
                <div className="border-t mt-3 pt-3 flex justify-between items-center">
                  <span className="font-semibold text-gray-700">
                    Total: ${total.toFixed(2)}
                  </span>
                  <button className="btn bg-primary text-white hover:opacity-80 transition">
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
