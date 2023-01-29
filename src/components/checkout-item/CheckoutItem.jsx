import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  CheckoutItemImage,
  ImageContainer,
  Quantity,
  QuantityValue,
  RemoveButton,
} from "./checkout-item.styles";

export default function CheckoutItem({ cartItem }) {
  const { imageUrl, name, quantity, price } = cartItem;
  const { addItemToCart, clearItemFromCart, removeItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => {
    addItemToCart(cartItem);
  };
  const removeItemHandler = () => {
    removeItemFromCart(cartItem);
  };
  const clearItemHandler = () => {
    clearItemFromCart(cartItem);
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <CheckoutItemImage src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <QuantityValue>{quantity}</QuantityValue>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}
