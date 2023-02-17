import { bindActionCreators } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../hooks';
import { categoriesActions } from '../categories.slice';

export const useCategoriesActions = () => {
  const allCategoriesActions = { ...categoriesActions };
  const dispatch = useAppDispatch();

  return bindActionCreators(allCategoriesActions, dispatch);
};
