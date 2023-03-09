import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCategories } from './categories.actions';
import { ICategory } from './types';

interface ICategoriesInitialState {
  categories: ICategory[];
  isLoading: boolean;
  errorMessage: string;
}

const INITIAL_STATE: ICategoriesInitialState = {
  categories: [],
  isLoading: false,
  errorMessage: '',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchCategories.fulfilled,
      (state, action: PayloadAction<ICategory[]>) => {
        state.isLoading = false;
        state.categories = action.payload;
      }
    );
    builder.addCase(
      fetchCategories.rejected,
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      }
    );
  },
});

export const categoriesReducer = categoriesSlice.reducer;
export const categoriesActions = categoriesSlice.actions;
