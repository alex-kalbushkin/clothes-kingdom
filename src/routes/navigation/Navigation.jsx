import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import styles from "./navigation.styles.module.scss";

function Navigation() {
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
          <Link className={styles.navLink} to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Navigation;
