import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import {
  CategoryContainer,
  CategoryProductsContainer,
  CategoryTitle,
  CategoryTitleContainer,
} from "./category.styles";

export default function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const products = useMemo(() => {
    const currentCategoryProducts = categoriesMap[category];
    return currentCategoryProducts || [];
  }, [category, categoriesMap]);

  return (
    <CategoryContainer>
      <CategoryTitleContainer>
        <CategoryTitle>{category}</CategoryTitle>
      </CategoryTitleContainer>
      <CategoryProductsContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryProductsContainer>
    </CategoryContainer>
  );
}
