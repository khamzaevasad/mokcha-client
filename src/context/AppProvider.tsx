import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";
import { CartItem } from "../lib/types/search";
import { showError, showInfo, showSuccess } from "../utils/toastService";
import { Messages } from "../lib/config";
import { LoginInput, Member, MemberInput } from "../lib/types/member";
import MemberService from "../services/MemberService";
import Cookies from "universal-cookie";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // Cookies logic
  const cookies = new Cookies();
  if (!cookies.get("accessToken")) localStorage.removeItem("memberData");

  const [authMember, setAuthMember] = useState<Member | null>(
    localStorage.getItem("memberData")
      ? JSON.parse(localStorage.getItem("memberData") as string)
      : null
  );
  console.log("=== verify ===");

  // basket state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // auth state
  const [memberNick, setMemberNick] = useState<string>("");
  const [memberPassword, setMemberPassword] = useState<string>("");
  const [memberPhone, setMemberPhone] = useState<string>("");

  // global login state
  const [isLogin, setIsLogin] = useState(false);

  // auth input
  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemberNick(e.target.value);
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemberPhone(e.target.value);
  };

  const handleMemberPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemberPassword(e.target.value);
  };

  useEffect(() => {
    // basket
    const cart = localStorage.getItem("cartData");
    if (cart) setCartItems(JSON.parse(cart));
  }, []);

  // auth signup request
  const handleSignupRequest = async () => {
    try {
      console.log("input", memberNick, memberPhone, memberPassword);
      const isFulfill =
        memberNick !== "" && memberPassword !== "" && memberPhone !== "";
      if (!isFulfill) throw new Error(Messages.error3);

      const signupInput: MemberInput = {
        memberNick: memberNick,
        memberPhone: memberPhone,
        memberPassword: memberPassword,
      };

      const member = new MemberService();
      const result = await member.signup(signupInput);
      setAuthMember(result);
      showSuccess("Signup successful");
    } catch (err: any) {
      console.log("ERROR", err);
      const msg =
        err?.response?.data?.message ??
        err?.response?.data ??
        err?.message ??
        "It seems an unknown error has occurred";

      showError(String(msg));
    }
  };

  // auth login request
  const handleLoginRequest = async () => {
    try {
      const isFulfill = memberNick !== "" && memberPassword !== "";
      if (!isFulfill) throw new Error(Messages.error3);

      const loginInput: LoginInput = {
        memberNick: memberNick,
        memberPassword: memberPassword,
      };

      const member = new MemberService();
      const result = await member.login(loginInput);
      setAuthMember(result);
      showSuccess("Login successful");
    } catch (err: any) {
      console.log("ERROR", err);
      const msg =
        err?.response?.data?.message ??
        err?.response?.data ??
        err?.message ??
        "It seems an unknown error has occurred";

      showError(String(msg));
    }
  };

  // handleLogoutRequest
  const handleLogoutRequest = async () => {
    try {
      const member = new MemberService();
      await member.logout();
      showSuccess("Logout successful");
      setAuthMember(null);
    } catch (err: any) {
      console.log("ERROR", err);
      const msg =
        err?.response?.data?.message ??
        err?.response?.data ??
        err?.message ??
        "It seems an unknown error has occurred";

      showError(String(msg));
    }
  };

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
    if (exist.quantity === 1) {
      updated = cartItems.filter((item: CartItem) => item._id !== input._id);
    } else {
      updated = cartItems.map((item: CartItem) =>
        item._id === input._id
          ? { ...exist, quantity: exist.quantity - 1 }
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
      value={{
        cartItems,
        onAdd,
        onDeleteAll,
        onRemove,
        onDelete,

        memberNick,
        setMemberNick,
        handleUserName,

        memberPhone,
        setMemberPhone,
        handlePhone,

        authMember,
        setAuthMember,
        memberPassword,
        setMemberPassword,
        handleMemberPassword,
        handleSignupRequest,
        handleLoginRequest,
        handleLogoutRequest,
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
