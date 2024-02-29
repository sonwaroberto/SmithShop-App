import {createSlice} from '@reduxjs/toolkit';
import {loginThunk, registerThunk} from './auth.thunk';
import {RegisterDataType} from '../../type/auth';
import {
  ApiRequestDataType,
  ApiRequestStatus,
  StoredErrorResponseType,
} from '../../type/api.types';
import storage from '../../utils/storage';

export interface AuthState {
  requestResponse: ApiRequestDataType<any>;
  user: RegisterDataType | any;
  isError: boolean;
  isSuccess: boolean;
  message: string;
  isLoading: boolean;
  isVerified?: boolean;
  accessToken: string;
  isAccessCodeValid: boolean;
}

const initialState: AuthState = {
  requestResponse: {
    status: ApiRequestStatus.IDLE,
    data: null,
  },
  user: {},
  isError: false,
  isSuccess: false,
  message: 'devboris is not available, from the store',
  isLoading: true,
  accessToken: '',
  isVerified: false,
  isAccessCodeValid: false,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState: initialState,
  reducers: {
    resetAuthState: state => {
      state.user = null;
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.accessToken = '';
      state.requestResponse.status = ApiRequestStatus.IDLE;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginThunk.pending, state => {
        state.requestResponse.status = ApiRequestStatus.PENDING;
        state.requestResponse.data = null;
        state.requestResponse.error = {} as StoredErrorResponseType;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.FULFILLED;
        state.requestResponse.data = action.payload;
        state.user = action.payload?.user;
        state.accessToken = action.payload?.token;
        storage.storeInfo('user', JSON.stringify(state.user));
        storage.storeInfo('token', state.accessToken);
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.REJECTED;
        state.requestResponse.error = action.payload as StoredErrorResponseType;
        console.log('action: ', action.payload);
      })
      .addCase(registerThunk.pending, state => {
        state.requestResponse.status = ApiRequestStatus.PENDING;
        state.requestResponse.data = null;
        state.requestResponse.error = {} as StoredErrorResponseType;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.FULFILLED;
        state.requestResponse.data = action.payload;
        state.user = action.payload?.user;
        state.accessToken = action.payload?.token;
        storage.storeInfo('user', JSON.stringify(state.user));
        storage.storeInfo('token', state.accessToken);
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.REJECTED;
        state.requestResponse.error = action.payload as StoredErrorResponseType;
        console.log('meine token22', action.payload);
        state.requestResponse.data = action.payload;
      });
  },
});
export const {resetAuthState, setUser, setToken} = authSlice.actions;
export default authSlice.reducer;
