import { useNavigate } from "react-router-dom";
import { SHOP_NOW_TITLE } from "../../constants/constants";
import styles from "./directory-item.styles.module.scss";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  const navigate = useNavigate();

  const directoryNavigationHandler = () => {
    navigate(`/shop/${title.toLowerCase()}`);
  };

  return (
    <div
      className={styles.directoryItemContainer}
      onClick={directoryNavigationHandler}
    >
      <div
        className={styles.directoryItemBackground}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className={styles.directoryItemBodyContainer}>
        <div className={styles.directoryItemTitle}>{title}</div>
        <div className={styles.shopNowMessage}>{SHOP_NOW_TITLE}</div>
      </div>
    </div>
  );
};

export default DirectoryItem;
