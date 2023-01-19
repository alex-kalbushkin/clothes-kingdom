import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartDropdownOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

const addCartItem = (cartItems, product) => {
  const currentCartItems = [...cartItems];

  const itemIndex = currentCartItems.findIndex((i) => i.id === product.id);

  if (itemIndex !== -1) {
    currentCartItems[itemIndex].quantity += 1;
  } else {
    currentCartItems.push({ ...product, quantity: 1 });
  }

  return currentCartItems;
};

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalCount, setCartTotalCount] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  useEffect(() => {
    const totalCount = cartItems.reduce(
      (total, currentItem) => total + currentItem.quantity,
      0
    );
    setCartTotalCount(totalCount);
  }, [cartItems]);

  useEffect(() => {
    const totalPrice = cartItems.reduce(
      (total, currentItem) =>
        (total += currentItem.price * currentItem.quantity),
      0
    );
    setCartTotalPrice(totalPrice);
  }, [cartItems, cartTotalCount]);

  const setIsCartDropdownOpen = () => {
    setIsCartOpen((prevIsCartOpenStatus) => !prevIsCartOpenStatus);
  };

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const cartContextValue = {
    isCartOpen,
    setIsCartDropdownOpen,
    cartItems,
    addItemToCart,
    cartTotalCount,
    cartTotalPrice,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
