import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartDropdownOpen: () => {},
  cartItems: [],
  cartTotalCount: 0,
  cartTotalPrice: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
});

const addOrRemoveCartItem = (cartItems, product, isAddItem) => {
  const currentCartItems = [...cartItems];
  const itemIndex = currentCartItems.findIndex((i) => i.id === product.id);

  const currentItem = itemIndex !== -1 ? currentCartItems[itemIndex] : null;

  if (isAddItem) {
    currentItem
      ? (currentItem.quantity += 1)
      : currentCartItems.push({ ...product, quantity: 1 });
  } else {
    currentItem.quantity === 1
      ? currentCartItems.splice(itemIndex, 1)
      : (currentItem.quantity -= 1);
  }

  return currentCartItems;
};

const deleteCartItem = (cartItems, cartItem) => {
  const currentCartItems = [...cartItems];

  const itemForDeleteIndex = currentCartItems.findIndex(
    (item) => item.id === cartItem.id
  );

  if (itemForDeleteIndex !== -1) {
    currentCartItems.splice(itemForDeleteIndex, 1);
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
  }, [cartItems]);

  const setIsCartDropdownOpen = () => {
    setIsCartOpen((prevIsCartOpenStatus) => !prevIsCartOpenStatus);
  };

  const addItemToCart = (product) => {
    setCartItems(addOrRemoveCartItem(cartItems, product, true));
  };
  const removeItemFromCart = (cartItem) => {
    setCartItems(addOrRemoveCartItem(cartItems, cartItem, false));
  };
  const clearItemFromCart = (cartItem) => {
    setCartItems(deleteCartItem(cartItems, cartItem));
  };

  const cartContextValue = {
    isCartOpen,
    setIsCartDropdownOpen,
    cartItems,
    cartTotalCount,
    cartTotalPrice,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
