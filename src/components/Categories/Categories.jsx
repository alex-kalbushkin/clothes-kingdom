import Category from "../Category";
import { clothesCategories } from "../../mocks/categories";
import styles from "./categories.styles.module.scss";

const Categories = () => {
  <div className={styles.categoriesContainer}></div>;
  return clothesCategories.map((category) => {
    return <Category key={category.id} category={category} />;
  });
};

export default Categories;
