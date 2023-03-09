import { createAsyncThunk } from '@reduxjs/toolkit';

import { getCollectionAndDocs } from '../../utils/firebase';
import { ICategory } from './types';

export const fetchCategories = createAsyncThunk<
  ICategory[],
  any,
  { rejectValue: string }
>('categories/fetchAll', async (_, thunkApi) => {
  try {
    return await getCollectionAndDocs('categories');
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
