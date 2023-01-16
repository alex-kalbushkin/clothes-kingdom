import { createContext, useState } from "react";
import PRODUCTS from "../mocks/products.json";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsContextProvider = ({ children }) => {
  const [products] = useState(PRODUCTS);
  const productsContextValue = { products };

  return (
    <ProductsContext.Provider value={productsContextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
