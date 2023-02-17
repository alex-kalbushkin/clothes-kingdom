import { useCartActions } from '../../store/cart';
import styles from './checkout-item.styles.module.scss';

export default function CheckoutItem({ cartItem }) {
  const { imageUrl, name, quantity, price } = cartItem;

  const { addItemToCart, clearItemFromCart, removeItemFromCart } =
    useCartActions();

  const addItemHandler = () => {
    addItemToCart(cartItem);
  };
  const removeItemHandler = () => {
    removeItemFromCart(cartItem);
  };
  const clearItemHandler = () => {
    clearItemFromCart(cartItem);
  };

  return (
    <div className={styles.checkoutItemContainer}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={`${name}`} className={styles.image} />
      </div>
      <span className={styles.name}>{name}</span>
      <div className={styles.quantity}>
        <div className={styles.arrow} onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className={styles.quantityValue}>{quantity}</span>
        <div className={styles.arrow} onClick={addItemHandler}>
          &#10095;
        </div>
      </div>
      <span className={styles.price}>{price}</span>
      <div className={styles.removeButton} onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
}
