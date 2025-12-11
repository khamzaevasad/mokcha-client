// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { AppProvider } from "./context/AppProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppProvider>
      {/* <StrictMode> */}
      <App />
      {/* </StrictMode> */}
    </AppProvider>
  </Provider>
);
