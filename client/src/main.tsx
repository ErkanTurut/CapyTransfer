import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//styles
import "./theme/styles.scss";
import "@rainbow-me/rainbowkit/styles.css";
import { useTheme } from "@mui/material";

//wallet
import {
  RainbowKitProvider,
  lightTheme,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import wagmiClient, { chains } from "./components/wallet/wagmi.config";

//redux
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./state/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <App />
          </RainbowKitProvider>
        </WagmiConfig>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
