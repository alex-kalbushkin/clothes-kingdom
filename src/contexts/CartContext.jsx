import { createContext, useEffect, useReducer } from "react";

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

const INITIAL_CART_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartTotalCount: 0,
  cartTotalPrice: 0,
};

const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_TOTAL_COUNT: "SET_CART_TOTAL_COUNT",
  SET_CART_TOTAL_PRICE: "SET_CART_TOTAL_PRICE",
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
        cartItems: payload,
      };

    case CART_ACTION_TYPES.SET_CART_TOTAL_COUNT:
      return {
        ...state,
        cartTotalCount: payload,
      };

    case CART_ACTION_TYPES.SET_CART_TOTAL_PRICE:
      return {
        ...state,
        cartTotalPrice: payload,
      };

    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartTotalCount, cartTotalPrice }, dispatch] =
    useReducer(cartReducer, INITIAL_CART_STATE);

  const setIsCartOpen = () => {
    dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN });
  };
  const setCartItems = (cartItems) => {
    dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: cartItems });
  };
  const setCartTotalCount = (totalCount) => {
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_TOTAL_COUNT,
      payload: totalCount,
    });
  };
  const setCartTotalPrice = (totalPrice) => {
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_TOTAL_PRICE,
      payload: totalPrice,
    });
  };

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
    setIsCartOpen();
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
