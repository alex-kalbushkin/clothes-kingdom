import { useContext } from "react";
import ProductCard from "../../components/product-card";
import { ProductsContext } from "../../contexts/ProductsContext";
import styles from "./shop.styles.module.scss";

function Shop() {
  const { products } = useContext(ProductsContext);

  return (
    <div className={styles.productsContainer}>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}

export default Shop;
