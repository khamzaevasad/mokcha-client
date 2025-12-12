import { createContext } from "react";
import { CartItem } from "../lib/types/search";
import { Member } from "../lib/types/member";

export interface AppContextType {
  // basket
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDeleteAll: () => void;

  // auth
  authMember: Member | null;
  setAuthMember: (member: Member | null) => void;
  memberNick: string;
  setMemberNick: (value: string) => void;

  memberPhone: string;
  setMemberPhone: (value: string) => void;

  memberPassword: string;
  setMemberPassword: (value: string) => void;

  handleUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePhone: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMemberPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;

  handleSignupRequest: () => void;
  handleLoginRequest: () => void;

  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;

  //   user: any | null;
  //   setUser: (user: any | null) => void;
}

export const AppContext = createContext<AppContextType | null>(null);
