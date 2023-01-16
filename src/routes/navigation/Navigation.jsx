import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown";
import CartIcon from "../../components/cart-icon";
import { UserContext } from "../../contexts/UserContext";
import { signOutUser } from "../../utils/firebase";
import styles from "./navigation.styles.module.scss";

function Navigation() {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className={styles.navigation}>
        <Link className={styles.logoContainer} to="/">
          <Logo className={styles.logo} />
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

        <CartDropdown />
      </div>

      <Outlet />
    </>
  );
}

export default Navigation;
