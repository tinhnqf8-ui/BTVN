import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router";
import { router } from "./Route";
import { Provider as ReduxProvider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { ErrorBoundary } from "./components/ErrorBoundaries/ErrorBoundaries";
createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </ReduxProvider>
  </ErrorBoundary>
);
