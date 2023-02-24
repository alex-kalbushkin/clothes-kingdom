import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card';
import { useCategoriesMapState } from '../../store/categories';
import styles from './category.styles.module.scss';

export default function Category() {
  const { category } = useParams();

  const categoriesMap = useCategoriesMapState();

  const categoryTitle = useMemo(() => {
    return category ? category[0].toUpperCase() + category.slice(1) : '';
  }, [category]);

  const products = useMemo(() => {
    const currentCategoryProducts = categoriesMap[categoryTitle];
    return currentCategoryProducts || [];
  }, [categoryTitle, categoriesMap]);

  return (
    <div className={styles.categoryContainer}>
      <div className={styles.categoryTitleContainer}>
        <span className={styles.categoryTitle}>{category}</span>
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
