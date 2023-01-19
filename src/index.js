import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import { CartContextProvider } from "./contexts/CartContext";
import { ProductsContextProvider } from "./contexts/ProductsContext";
import { UserContextProvider } from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ProductsContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </ProductsContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
