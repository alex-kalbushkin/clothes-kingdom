import { Link } from "react-router-dom";
import ProductCard from "../product-card";
import styles from "./category-preview.styles.module.scss";

export default function CategoryPreview({ title, products }) {
  return (
    <div className={styles.categoryPreviewContainer}>
      <div className={styles.titleLinkContainer}>
        <Link className={styles.title} to={title}>
          {title.toUpperCase()}
        </Link>
      </div>

      <div className={styles.previewProducts}>
        {products
          .filter((p, productIndex) => productIndex < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
