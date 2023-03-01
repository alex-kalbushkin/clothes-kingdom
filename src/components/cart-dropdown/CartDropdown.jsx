import { useNavigate } from 'react-router-dom';
import { Button } from '../button';
import CartItem from '../cart-item';
import styles from './cart-dropdown.styles.module.scss';
import { useCartActions, useCartItemsState } from '../../store/cart';

function CartDropdown() {
  const navigate = useNavigate();

  const { setIsCartOpen } = useCartActions();

  const cartItems = useCartItemsState();

  const goToCheckoutHandler = () => {
    setIsCartOpen();
    navigate('/checkout');
  };

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

      <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
    </div>
  );
}

export default CartDropdown;
