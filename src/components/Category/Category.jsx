import { SHOP_NOW_TITLE } from "../../constants/constants";
import styles from "./category.styles.module.scss";

const Category = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <div className={styles.categoryContainer}>
      <div
        className={styles.categoryBackground}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className={styles.categoryBodyContainer}>
        <div className={styles.categoryTitle}>{title}</div>
        <div className={styles.shopNowMessage}>{SHOP_NOW_TITLE}</div>
      </div>
    </div>
  );
};

export default Category;
