import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg';
import styles from './cart-icon.styles.module.scss';
import { useCartActions, useCartState } from '../../store/cart';

function CartIcon() {
  const { setIsCartOpen } = useCartActions();
  const { cartTotalCount } = useCartState();

  return (
    <div className={styles.cartIconContainer} onClick={setIsCartOpen}>
      <ShoppingSvg className={styles.shoppingIcon} />
      <span className={styles.itemCounter}>{cartTotalCount}</span>
    </div>
  );
}

export default CartIcon;
