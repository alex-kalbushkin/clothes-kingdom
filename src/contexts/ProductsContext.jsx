import { createContext, useEffect, useState } from "react";
import { SHOP_DATA } from "../mocks/shop-data";
import { addCollectionAndDocs, getCollectionAndDocs } from "../utils/firebase";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const productsContextValue = { products };

  useEffect(() => {
    // run only for firebase data add(shop data)
    // const addDataToFirestore = async () => {
    //   await addCollectionAndDocs("categories", SHOP_DATA);
    // };
    // addDataToFirestore();

    const getCategoriesMap = async () => {
      const categories = await getCollectionAndDocs("categories");

      console.log(categories);

      // if(categories) {
      // setProducts(categories);
      // }
    };

    getCategoriesMap();
  }, []);

  return (
    <ProductsContext.Provider value={productsContextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
