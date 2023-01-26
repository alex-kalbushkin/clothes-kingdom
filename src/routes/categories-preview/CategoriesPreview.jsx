import { useContext } from "react";
import CategoryPreview from "../../components/category-preview";
import { CategoriesContext } from "../../contexts/CategoriesContext";

export default function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);
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
