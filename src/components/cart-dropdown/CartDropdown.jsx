import Button from "../button";
import styles from "./cart-dropdown.styles.module.scss";

function CartDropdown() {
  return (
    <div className={styles.cartDropdownContainer}>
      <div className={styles.cartItems}></div>
      <Button>Go to checkout</Button>
    </div>
  );
}

export default CartDropdown;
