import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import styles from "./cart-icon.styles.module.scss";

function CartIcon() {
  return (
    <div className={styles.cartIconContainer}>
      <ShoppingIcon className={styles.shoppingIcon} />
      <span className={styles.itemCounter}>0</span>
    </div>
  );
}

export default CartIcon;
