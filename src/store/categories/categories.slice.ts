import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  categoriesMap: {},
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: INITIAL_STATE,
  reducers: {
    setCategoriesMap: (state, action: PayloadAction<any>) => {
      state.categoriesMap = action.payload;
    },
  },
});

export const categoriesReducer = categoriesSlice.reducer;
export const categoriesActions = categoriesSlice.actions;
