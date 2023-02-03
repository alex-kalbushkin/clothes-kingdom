import { createContext, useReducer } from "react";
import { reducerActionCreator } from "../utils/reducer";

export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  cartTotalCount: 0,
  cartTotalPrice: 0,
  setIsCartDropdownOpen: () => {},
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

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartTotalCount: 0,
  cartTotalPrice: 0,
};

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartTotalCount, cartTotalPrice }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const cartTotalCount = newCartItems.reduce(
      (total, currentItem) => total + currentItem.quantity,
      0
    );
    const cartTotalPrice = newCartItems.reduce(
      (total, currentItem) =>
        (total += currentItem.price * currentItem.quantity),
      0
    );

    dispatch(
      reducerActionCreator(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartTotalCount,
        cartTotalPrice,
      })
    );
  };

  const setIsCartDropdownOpen = () => {
    dispatch(reducerActionCreator(CART_ACTION_TYPES.SET_IS_CART_OPEN));
  };

  const addItemToCart = (product) => {
    const newCartItems = addOrRemoveCartItem(cartItems, product, true);
    updateCartItemsReducer(newCartItems);
  };
  const removeItemFromCart = (cartItem) => {
    const newCartItems = addOrRemoveCartItem(cartItems, cartItem, false);
    updateCartItemsReducer(newCartItems);
  };
  const clearItemFromCart = (cartItem) => {
    const newCartItems = deleteCartItem(cartItems, cartItem);
    updateCartItemsReducer(newCartItems);
  };

  const cartContextValue = {
    isCartOpen,
    cartItems,
    cartTotalCount,
    cartTotalPrice,
    addItemToCart,
    clearItemFromCart,
    removeItemFromCart,
    setIsCartDropdownOpen,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
