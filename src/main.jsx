import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "sonner";
import { AppProvider } from "./context/AppContext.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <AppProvider>
          <Toaster richColors={true} position="top-right" />
          <App />
        </AppProvider>
      </Provider>
    </PersistGate>
  </StrictMode>
);
