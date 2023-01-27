import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { Button } from "../button";
import CartItem from "../cart-item";
import {
  CartDropdownContainer,
  CartItems,
  EmptyCartMessage,
} from "./cart-dropdown.styles";

function CartDropdown() {
  const navigate = useNavigate();

  const { cartItems, setIsCartDropdownOpen } = useContext(CartContext);

  const goToCheckoutHandler = () => {
    setIsCartDropdownOpen();
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {!!cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
        )}
      </CartItems>

      <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
