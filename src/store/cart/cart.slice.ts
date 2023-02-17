import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  addOrRemoveCartItem,
  deleteCartItem,
  updateCartItems,
} from './utils/cart.utils';

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartTotalCount: 0,
  cartTotalPrice: 0,
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
      const updatedCartItemsData = updateCartItems(newCartItems);

      state.cartItems = updatedCartItemsData.cartItems;
      state.cartTotalCount = updatedCartItemsData.cartTotalCount;
      state.cartTotalPrice = updatedCartItemsData.cartTotalPrice;
    },
    removeItemFromCart: (state, action: PayloadAction<any>) => {
      const newCartItems = addOrRemoveCartItem(
        state.cartItems,
        action.payload,
        false
      );
      const updatedCartItemsData = updateCartItems(newCartItems);

      state.cartItems = updatedCartItemsData.cartItems;
      state.cartTotalCount = updatedCartItemsData.cartTotalCount;
      state.cartTotalPrice = updatedCartItemsData.cartTotalPrice;
    },
    clearItemFromCart: (state, action: PayloadAction<any>) => {
      const newCartItems = deleteCartItem(state.cartItems, action.payload);
      const updatedCartItemsData = updateCartItems(newCartItems);

      state.cartItems = updatedCartItemsData.cartItems;
      state.cartTotalCount = updatedCartItemsData.cartTotalCount;
      state.cartTotalPrice = updatedCartItemsData.cartTotalPrice;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
