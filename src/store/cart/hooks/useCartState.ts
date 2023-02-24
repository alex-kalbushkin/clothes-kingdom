import { createSelector } from 'reselect';
import { useAppSelector } from '../../hooks';
import { RootState } from '../../store';

const selectCartReducer = (state: RootState) => state.cart;

const selectCart = createSelector([selectCartReducer], (cart) => cart);

export const useCartState = () => useAppSelector(selectCart);
