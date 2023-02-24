import { createSelector } from '@reduxjs/toolkit';
import { useAppSelector } from '../../hooks';
import { RootState } from '../../store';

const selectCategoriesReducer = (state: RootState) => state.categories;

const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categories
);

const selectCategoriesMap = createSelector([selectCategories], (categories) =>
  categories.reduce((acc, category) => {
    const { items, title } = category;
    acc[title] = items;
    return acc;
  }, {})
);

export const useCategoriesMapState = () => useAppSelector(selectCategoriesMap);
