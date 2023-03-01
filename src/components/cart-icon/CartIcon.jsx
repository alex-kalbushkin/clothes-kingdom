import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg';
import styles from './cart-icon.styles.module.scss';
import { useCartActions, useCartTotalCountState } from '../../store/cart';

function CartIcon() {
  const { setIsCartOpen } = useCartActions();
  const cartTotalCount = useCartTotalCountState();

  return (
    <div className={styles.cartIconContainer} onClick={setIsCartOpen}>
      <ShoppingSvg className={styles.shoppingIcon} />
      <span className={styles.itemCounter}>{cartTotalCount}</span>
    </div>
  );
}

export default CartIcon;
