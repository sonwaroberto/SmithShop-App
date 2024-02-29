import {createAsyncThunk} from '@reduxjs/toolkit';
import AuthServices from '../../services/auth/auth.service';
import {LoginDataType, RegisterDataType} from '../../type/auth';
import {getExceptionPayload} from '../../lib/get-exception-payload';
import {ApiRequestErrorType} from '../../type/api.types';

export const loginThunk = createAsyncThunk(
  '/auth/login',
  async (data: LoginDataType, {rejectWithValue}) => {
    try {
      const response = await new AuthServices().login(data);
      console.log('response', response);
      return response;
    } catch (ex) {
      return rejectWithValue(getExceptionPayload(ex) as ApiRequestErrorType);
    }
  },
);

export const registerThunk = createAsyncThunk(
  '/auth/register',
  async (data: RegisterDataType, {rejectWithValue}) => {
    try {
      const response = await new AuthServices().register(data);
      return response;
    } catch (ex) {
      return rejectWithValue(getExceptionPayload(ex) as ApiRequestErrorType);
    }
  },
);
