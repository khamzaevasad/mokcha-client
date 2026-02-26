import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { AppProvider } from "./context/AppProvider.tsx";
import ToastProvider from "./components/providers/ToastProvider.tsx";
import { SocketProvider } from "./context/SocketProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppProvider>
      <SocketProvider>
        <StrictMode>
          <ToastProvider />
          <App />
        </StrictMode>
      </SocketProvider>
    </AppProvider>
  </Provider>,
);
