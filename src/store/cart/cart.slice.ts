import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addOrRemoveCartItem, deleteCartItem } from './utils/cart.utils';

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    addItemToCart: (state, action: PayloadAction<any>) => {
      const newCartItems = addOrRemoveCartItem(
        state.cartItems,
        action.payload,
        true
      );

      state.cartItems = newCartItems;
    },
    removeItemFromCart: (state, action: PayloadAction<any>) => {
      const newCartItems = addOrRemoveCartItem(
        state.cartItems,
        action.payload,
        false
      );

      state.cartItems = newCartItems;
    },
    clearItemFromCart: (state, action: PayloadAction<any>) => {
      const newCartItems = deleteCartItem(state.cartItems, action.payload);

      state.cartItems = newCartItems;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
