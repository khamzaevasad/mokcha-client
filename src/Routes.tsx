import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/home/HomePage";
import ProductPage from "./pages/productPage/ProductPage";
import OrderPage from "./pages/orderPage/OrderPage";
import UserPage from "./pages/userPage/UserPage";
import HelpPage from "./pages/helpPage/HelpPage";

export function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/products",
          element: <ProductPage />,
        },
        {
          path: "/orders",
          element: <OrderPage />,
        },
        {
          path: "/member-page",
          element: <UserPage />,
        },
        {
          path: "/help",
          element: <HelpPage />,
        },
      ],
    },
  ]);
  return routes;
}
