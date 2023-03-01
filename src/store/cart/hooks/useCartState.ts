import { createSelector } from 'reselect';
import { useAppSelector } from '../../hooks';
import { RootState } from '../../store';

const selectCartReducer = (state: RootState) => state.cart;

const selectCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);
export const useIsCartOpenState = () => useAppSelector(selectCartOpen);

const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);
export const useCartItemsState = () => useAppSelector(selectCartItems);

const selectCartTotalCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total: number, currentItem) => total + currentItem.quantity,
    0
  )
);
export const useCartTotalCountState = () =>
  useAppSelector(selectCartTotalCount);

const selectCartTotalPrice = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (totalPrice: number, cartItem) =>
      totalPrice + cartItem.quantity * cartItem.price,
    0
  )
);
export const useCartTotalPriceState = () =>
  useAppSelector(selectCartTotalPrice);
