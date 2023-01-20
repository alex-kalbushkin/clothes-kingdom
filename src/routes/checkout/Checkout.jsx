import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item";
import { CartContext } from "../../contexts/CartContext";
import styles from "./checkout.styles.module.scss";

export default function Checkout() {
  const { cartItems, cartTotalPrice } = useContext(CartContext);

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.checkoutHeader}>
        <span className={styles.headerBlock}>Product</span>
        <span className={styles.headerBlock}>Description</span>
        <span className={styles.headerBlock}>Quantity</span>
        <span className={styles.headerBlock}>Price</span>
        <span className={styles.headerBlock}>Remove</span>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className={styles.checkoutTotal}>{`Total: ${cartTotalPrice}`}</div>
    </div>
  );
}
