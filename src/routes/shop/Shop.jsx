import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useCategoriesActions } from '../../store/categories';
import { getCollectionAndDocs } from '../../utils/firebase';
import CategoriesPreview from '../categories-preview';
import Category from '../category';

function Shop() {
  const { setCategoriesMap } = useCategoriesActions();

  useEffect(() => {
    // run only for firebase data add(shop data)
    // const addDataToFirestore = async () => {
    //   await addCollectionAndDocs("categories", SHOP_DATA);
    // };
    // addDataToFirestore();

    const getCategoriesMap = async () => {
      const categories = await getCollectionAndDocs('categories');

      if (categories) {
        setCategoriesMap(categories);
      }
    };

    getCategoriesMap();
  }, [setCategoriesMap]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}

export default Shop;
