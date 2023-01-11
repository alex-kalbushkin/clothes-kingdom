import Category from "../category";
import styles from "./categories.styles.module.scss";

const Categories = ({ clothesCategories }) => {
  return (
    <div className={styles.categoriesContainer}>
      {clothesCategories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
