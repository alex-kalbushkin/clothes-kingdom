import CategoryPreview from '../../components/category-preview';
import Spinner from '../../components/spinner';
import {
  useCategoriesLoading,
  useCategoriesMapState,
} from '../../store/categories';

export default function CategoriesPreview() {
  const categoriesMap = useCategoriesMapState();
  const isCategoriesLoading = useCategoriesLoading();

  return (
    <>
      {isCategoriesLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];

          return (
            <CategoryPreview
              key={title}
              products={products || []}
              title={title}
            />
          );
        })
      )}
    </>
  );
}
