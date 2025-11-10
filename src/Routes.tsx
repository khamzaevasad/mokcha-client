import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { HomePage, ProductPage, OrderPage, UserPage, HelpPage } from "./pages";

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
