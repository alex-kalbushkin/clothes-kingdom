import DirectoryItem from "../directory-item";
import { DirectoryContainer } from "./directory.styles";

const Directory = ({ clothesCategories }) => {
  return (
    <DirectoryContainer>
      {clothesCategories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
