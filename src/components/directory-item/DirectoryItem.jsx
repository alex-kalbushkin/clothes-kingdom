import { SHOP_NOW_TITLE } from "../../constants/constants";
import {
  DirectoryItemBackground,
  DirectoryItemBodyContainer,
  DirectoryItemContainer,
  DirectoryItemTitle,
  ShopNowMessage,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <DirectoryItemContainer>
      <DirectoryItemBackground
        imageUrl={imageUrl}
        // style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <DirectoryItemBodyContainer>
        <DirectoryItemTitle>{title}</DirectoryItemTitle>
        <ShopNowMessage>{SHOP_NOW_TITLE}</ShopNowMessage>
      </DirectoryItemBodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
