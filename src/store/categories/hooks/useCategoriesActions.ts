import { bindActionCreators } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../hooks';
import { fetchCategories } from '../categories.actions';

export const useCategoriesActions = () => {
  const allCategoriesActions = { fetchCategories };
  const dispatch = useAppDispatch();

  return bindActionCreators(allCategoriesActions, dispatch);
};
