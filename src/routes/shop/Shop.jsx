import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useCategoriesActions } from '../../store/categories';
import { getCollectionAndDocs } from '../../utils/firebase';
import CategoriesPreview from '../categories-preview';
import Category from '../category';

function Shop() {
  const { setCategories } = useCategoriesActions();

  useEffect(() => {
    // run only for firebase data add(shop data)
    // const addDataToFirestore = async () => {
    //   await addCollectionAndDocs("categories", SHOP_DATA);
    // };
    // addDataToFirestore();

    const getCategories = async () => {
      const categories = await getCollectionAndDocs('categories');

      if (categories) {
        setCategories(categories);
      }
    };

    getCategories();
  }, [setCategories]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}

export default Shop;
