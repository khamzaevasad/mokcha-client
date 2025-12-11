import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";
import { CartItem } from "../lib/types/search";

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
  };

  return (
    <AppContext.Provider value={{ cartItems, onAdd }}>
      {children}
    </AppContext.Provider>
  );
};
