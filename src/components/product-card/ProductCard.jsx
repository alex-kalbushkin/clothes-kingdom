import { useCartActions } from '../../store/cart';
import { Button } from '../button';
import styles from './product-card.styles.module.scss';

function ProductCard({ product }) {
  const { name, imageUrl, price } = product;

  const { addItemToCart } = useCartActions();

  const addItemToCartHandler = () => addItemToCart(product);

  return (
    <div className={styles.productCardContainer}>
      <img src={imageUrl} alt={name} />

      <div className={styles.cardFooter}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>

      <Button buttonType="inverted" onClick={addItemToCartHandler}>
        Add to cart
      </Button>
    </div>
  );
}

export default ProductCard;
