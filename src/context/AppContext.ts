import { createContext } from "react";
import { CartItem } from "../lib/types/search";

export interface AppContextType {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDeleteAll: () => void;

  //   user: any | null;
  //   setUser: (user: any | null) => void;
}

export const AppContext = createContext<AppContextType | null>(null);
