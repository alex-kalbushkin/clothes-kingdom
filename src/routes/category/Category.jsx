import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import styles from "./category.styles.module.scss";

export default function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const products = useMemo(() => {
    const currentCategoryProducts = categoriesMap[category];
    return currentCategoryProducts || [];
  }, [category, categoriesMap]);

  return (
    <div className={styles.categoryContainer}>
      <div className={styles.categoryTitleContainer}>
        <span className={styles.categoryTitle}>{category.toUpperCase()}</span>
      </div>
      <div className={styles.categoryProductsContainer}>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
