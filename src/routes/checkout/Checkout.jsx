import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item";
import { CartContext } from "../../contexts/CartContext";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  CheckoutTotal,
} from "./checkout.styles";

export default function Checkout() {
  const { cartItems, cartTotalPrice } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>Product</HeaderBlock>
        <HeaderBlock>Description</HeaderBlock>
        <HeaderBlock>Quantity</HeaderBlock>
        <HeaderBlock>Price</HeaderBlock>
        <HeaderBlock>Remove</HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <CheckoutTotal>{`Total: $${cartTotalPrice}`}</CheckoutTotal>
    </CheckoutContainer>
  );
}
