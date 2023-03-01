import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartDropdown from '../../components/cart-dropdown';
import CartIcon from '../../components/cart-icon';
import { useIsCartOpenState } from '../../store/cart';
import { useCurrentUserState } from '../../store/user';
import { signOutUser } from '../../utils/firebase';
import styles from './navigation.styles.module.scss';

function Navigation() {
  const currentUser = useCurrentUserState();

  const isCartOpen = useIsCartOpenState();

  return (
    <>
      <div className={styles.navigationContainer}>
        <Link className={styles.logoContainer} to="/">
          <Logo />
        </Link>
        <div className={styles.navLinksContainer}>
          <Link className={styles.navLink} to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className={styles.navLink} onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className={styles.navLink} to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>

        {isCartOpen && <CartDropdown />}
      </div>

      <Outlet />
    </>
  );
}

export default Navigation;
