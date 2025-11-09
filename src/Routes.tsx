import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";

export function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
    },
  ]);
  return routes;
}
