import CategoryPreview from '../../components/category-preview';
import { useCategoriesMapState } from '../../store/categories';

export default function CategoriesPreview() {
  const categoriesMap = useCategoriesMapState();

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return (
          <CategoryPreview
            key={title}
            products={products || []}
            title={title}
          />
        );
      })}
    </>
  );
}
