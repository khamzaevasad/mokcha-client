import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";
import { CartItem } from "../lib/types/search";
import { showInfo, showSuccess } from "../utils/toastService";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // basket state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // user auth

  useEffect(() => {
    // basket
    const cart = localStorage.getItem("cartData");
    if (cart) setCartItems(JSON.parse(cart));

    // user auth
  }, []);

  // basketAdd
  const onAdd = (input: CartItem) => {
    const exist: CartItem | undefined = cartItems.find(
      (item: CartItem) => item._id === input._id
    );

    let updated;
    if (exist) {
      updated = cartItems.map((item: CartItem) =>
        item._id === input._id
          ? { ...exist, quantity: exist.quantity + 1 }
          : item
      );
    } else {
      updated = [...cartItems, { ...input }];
    }
    setCartItems(updated);
    localStorage.setItem("cartData", JSON.stringify(updated));
    showSuccess("Product added to cart");
  };

  // baskedRemove
  const onRemove = (input: CartItem) => {
    const exist: any = cartItems.find(
      (item: CartItem) => item._id === input._id
    );

    let updated;
    if (exist?.quantity) {
      updated = cartItems.filter((item: CartItem) => item._id !== input._id);
    } else {
      updated = cartItems.map((item: CartItem) =>
        item._id === input._id
          ? { ...exist, quantity: exist?.quantity - 1 }
          : item
      );
    }

    setCartItems(updated);
    localStorage.setItem("cartData", JSON.stringify(updated));
  };

  // baskedDelete
  const onDelete = (input: CartItem) => {
    const updated = cartItems.filter(
      (item: CartItem) => item._id !== input._id
    );
    setCartItems(updated);
    localStorage.setItem("cartData", JSON.stringify(updated));
    showSuccess("Product have been deleted");
  };

  // basketDeleteAll
  const onDeleteAll = () => {
    setCartItems([]);
    localStorage.removeItem("cartData");
    showInfo("Cart has been cleared");
  };

  return (
    <AppContext.Provider
      value={{ cartItems, onAdd, onDeleteAll, onRemove, onDelete }}
    >
      {children}
    </AppContext.Provider>
  );
};
