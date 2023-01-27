import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import {
  CartIconContainer,
  ItemCounter,
  ShoppingIcon,
} from "./cart-icon.styles";

function CartIcon() {
  const { cartTotalCount, setIsCartDropdownOpen } = useContext(CartContext);

  return (
    <CartIconContainer onClick={setIsCartDropdownOpen}>
      <ShoppingIcon />
      <ItemCounter>{cartTotalCount}</ItemCounter>
    </CartIconContainer>
  );
}

export default CartIcon;
