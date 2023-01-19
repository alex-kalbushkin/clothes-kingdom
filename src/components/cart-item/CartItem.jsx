import styles from "./cart-item.styles.module.scss";

export default function CartItem({ cartItem }) {
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <div className={styles.cartItemContainer}>
      <img className={styles.cartItemImage} alt={`${name}`} src={imageUrl} />

      <div className={styles.cartItemDetails}>
        <span className={styles.cartItemName}>{name}</span>
        <span
          className={styles.cartItemPrice}
        >{`${quantity} x $${price}`}</span>
      </div>
    </div>
  );
}
