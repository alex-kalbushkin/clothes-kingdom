import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/UserContext";
import { signOutUser } from "../../utils/firebase";
import styles from "./navigation.styles.module.scss";

function Navigation() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

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
            <span className={styles.navLink} onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className={styles.navLink} to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Navigation;
