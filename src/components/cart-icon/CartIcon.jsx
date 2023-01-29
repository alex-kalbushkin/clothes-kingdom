import { useContext } from "react";
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/CartContext";
import styles from "./cart-icon.styles.module.scss";

function CartIcon() {
  const { cartTotalCount, setIsCartDropdownOpen } = useContext(CartContext);

  return (
    <div className={styles.cartIconContainer} onClick={setIsCartDropdownOpen}>
      <ShoppingSvg className={styles.shoppingIcon} />
      <span className={styles.itemCounter}>{cartTotalCount}</span>
    </div>
  );
}

export default CartIcon;
