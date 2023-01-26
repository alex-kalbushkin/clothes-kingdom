import DirectoryItem from "../directory-item";
import styles from "./directory.styles.module.scss";

const Directory = ({ clothesCategories }) => {
  return (
    <div className={styles.directoryContainer}>
      {clothesCategories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
