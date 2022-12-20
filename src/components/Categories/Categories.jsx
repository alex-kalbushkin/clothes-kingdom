import Category from "../Category";
import { clothesCategories } from "../../mocks/categories";
import styles from "./categories.styles.module.scss";

const Categories = () => {
  return (
    <div className={styles.categoriesContainer}>
      {clothesCategories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
