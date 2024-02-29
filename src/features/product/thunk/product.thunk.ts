import {createAsyncThunk} from '@reduxjs/toolkit';
import ProductServices from '../../../services/products/products.service';
import {handleErrorMessages} from '../../../utils/HandleRequestErrors';

export const getAllProductsThunk = createAsyncThunk(
  'get/products',
  async (_, thunkAPI) => {
    try {
      return await new ProductServices().getAllProducts();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleErrorMessages(error));
    }
  },
);
