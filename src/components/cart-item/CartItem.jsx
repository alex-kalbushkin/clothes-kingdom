import { CartItemContainer, CartItemDetails } from "./cart-item.styles";

export default function CartItem({ cartItem }) {
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img alt={`${name}`} src={imageUrl} />

      <CartItemDetails>
        <span>{name}</span>
        <span>{`${quantity} x $${price}`}</span>
      </CartItemDetails>
    </CartItemContainer>
  );
}
