import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import Button from "../button";
import CartItem from "../cart-item";
import styles from "./cart-dropdown.styles.module.scss";

function CartDropdown() {
  const { cartItems, cartTotalPrice } = useContext(CartContext);

  return (
    <div className={styles.cartDropdownContainer}>
      <div className={styles.cartItems}>
        {!!cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className={styles.emptyCartMessage}>Your cart is empty</span>
        )}
      </div>
      <span
        className={styles.totalPriceValue}
      >{`Total: $${cartTotalPrice}`}</span>
      <Button>Go to checkout</Button>
    </div>
  );
}

export default CartDropdown;
