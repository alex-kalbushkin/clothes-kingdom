import { bindActionCreators } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../hooks';
import { cartActions } from '../cart.slice';

export const useCartActions = () => {
  const allActions = { ...cartActions };
  const dispatch = useAppDispatch();

  return bindActionCreators(allActions, dispatch);
};
