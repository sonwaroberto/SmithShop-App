import {createSlice} from '@reduxjs/toolkit';
import storage from '../../../utils/storage';
import {getAllProductsThunk} from '../thunk/product.thunk';
import {ErrorMessage} from 'type/auth/messages/MessageTypes';

export interface ProductState {
  products: any;
  favoriteProducts: any;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  cartItems: any[];
  message: any;
}

const initialState: ProductState = {
  products: [],
  favoriteProducts: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
  cartItems: [],
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    resetProductState: state => {
      state.products = [];
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
    addProductToCart: (state, action) => {
      const product = action.payload;
      if (state.cartItems.some((item: any) => item.id === product.id)) {
        return;
      }
      state.cartItems.push({...product, quantity: 1});
      storage.storeInfo('@cartItems', state.cartItems);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllProductsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllProductsThunk.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = payload?.products;
        console.log('user products loaded', state.products);
      })
      .addCase(getAllProductsThunk.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.isError = true;
        state.message = (payload as ErrorMessage)?.message;
      });
  },
});

const {actions, reducer} = productSlice;
export const {resetProductState, addProductToCart} = actions;
export default reducer;
