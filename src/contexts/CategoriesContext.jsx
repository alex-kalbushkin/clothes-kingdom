import { createContext, useEffect, useState } from "react";
// import { SHOP_DATA } from "../mocks/shop-data";
import {
  // addCollectionAndDocs,
  getCollectionAndDocs,
} from "../utils/firebase";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesContextProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    // run only for firebase data add(shop data)
    // const addDataToFirestore = async () => {
    //   await addCollectionAndDocs("categories", SHOP_DATA);
    // };
    // addDataToFirestore();

    const getCategoriesMap = async () => {
      const categories = await getCollectionAndDocs("categories");

      if (categories) {
        setCategoriesMap(categories);
      }
    };

    getCategoriesMap();
  }, []);

  const categoriesContextValue = { categoriesMap };
  return (
    <CategoriesContext.Provider value={categoriesContextValue}>
      {children}
    </CategoriesContext.Provider>
  );
};
