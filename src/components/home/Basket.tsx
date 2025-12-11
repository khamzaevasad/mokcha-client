import { useState } from "react";
import { ShoppingCart, Trash2, X } from "lucide-react";
import { serverApi } from "../../lib/config";
import { useApp } from "../../hooks/useApp";
import { CartItem } from "../../lib/types/search";

export default function Basket() {
  const { cartItems, onAdd, onDelete, onDeleteAll, onRemove } = useApp();

  const [open, setOpen] = useState(false);

  const itemPrice = cartItems.reduce(
    (acc: number, curVal: CartItem) => acc + curVal.quantity * curVal.price,
    0
  );

  const shippingCost: number = itemPrice < 100 ? 5 : 0;
  const totalPrice = (itemPrice + shippingCost).toFixed(1);

  return (
    <div className="relative">
      {/* CART ICON */}
      <button
        className="relative p-2 cursor-pointer hover:opacity-80 rounded-full transition"
        onClick={() => setOpen(!open)}
      >
        <ShoppingCart className="w-6 h-6 text-primary" />
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-destructive text-white text-xs rounded-full px-1.5 font-medium">
            {cartItems.length}
          </span>
        )}
      </button>

      {/* CART DROPDOWN */}
      {open && (
        <div className="w-80 mt-2 absolute right-0 max-sm:fixed max-sm:top-20 max-sm:left-1/2 max-sm:-translate-x-1/2 z-50 bg-card border border-border shadow-2xl rounded-2xl overflow-hidden">
          {/* HEADER */}
          <div className="px-5 py-4 flex items-center justify-between border-b border-border bg-muted">
            <h3 className="font-bold text-lg text-foreground">Shopping Cart</h3>
            {cartItems.length > 0 && (
              <button
                onClick={onDeleteAll}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-destructive text-white transition hover:opacity-80"
              >
                <Trash2 size={14} />
                Clear All
              </button>
            )}
          </div>

          {/* CONTENT */}
          <div className="p-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <ShoppingCart className="w-16 h-16 mx-auto mb-3 opacity-30" />
                <p className="text-base font-medium">Your cart is empty</p>
                <p className="text-sm mt-1">Add items to get started</p>
              </div>
            ) : (
              <>
                <div className="max-h-80 overflow-y-auto divide-y divide-border">
                  {cartItems.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-center py-4 gap-3 group"
                    >
                      {/* Remove button */}
                      <button
                        onClick={() => onDelete(item)}
                        className="cursor-pointer transition-all opacity-60 group-hover:opacity-100 text-muted-foreground hover:text-destructive"
                      >
                        <X size={18} strokeWidth={2.5} />
                      </button>

                      {/* Image */}
                      <div className="relative">
                        <img
                          src={`${serverApi}/${item.image}`}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-xl shadow-sm ring-1 ring-border"
                        />
                      </div>

                      {/* Name + price */}
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate text-foreground">
                          {item.name}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-base font-bold text-primary">
                            ${item.price}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            × {item.quantity}
                          </span>
                        </div>
                      </div>

                      {/* Quantity control */}
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => onRemove(item)}
                          className="cursor-pointer w-7 h-7 flex items-center justify-center rounded-lg transition-all text-sm font-bold bg-muted text-primary hover:bg-secondary"
                        >
                          −
                        </button>
                        <span className="w-7 text-center font-semibold text-sm text-foreground">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onAdd(item)}
                          className="cursor-pointer w-7 h-7 flex items-center justify-center rounded-lg transition-all text-sm font-bold bg-primary text-primary-foreground hover:opacity-85"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer section */}
                <div className="border-t border-border pt-4 mt-4 space-y-3">
                  {/* Subtotal */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold text-foreground">
                      ${itemPrice}
                    </span>
                  </div>

                  {/* Shipping */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-semibold text-foreground">
                      ${shippingCost}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-border pt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-base font-semibold text-foreground">
                        Total
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        ${totalPrice}
                      </span>
                    </div>
                  </div>

                  <button className="cursor-pointer w-full py-3 font-semibold rounded-xl shadow-sm bg-accent text-accent-foreground transition-all hover:shadow-md hover:-translate-y-0.5">
                    Proceed to Checkout
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
