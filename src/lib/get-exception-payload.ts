import {ApiRequestErrorType} from '../type/api.types';
import {InternalServerError} from './axios-instance';

export const getExceptionPayload = (
  ex: any,
):
  | ApiRequestErrorType
  | {
      message: string;
      code: number;
    } => {
  console.log('====================================');
  console.log({ex});
  console.log('====================================');
  if ((ex as {code: string}).code === 'ERR_NETWORK') {
    return {
      message:
        'Network Error. Please check your internet connection and try again.',
      code: -501,
      response: ex?.response,
    };
  }

  if (typeof ex !== 'object' || !ex) {
    return InternalServerError;
  }

  if (typeof ex === 'object') {
    console.log('hello bordfdis', ex.response);
    return {
      message: ex?.response.data.message ?? ex?.response.data.error,
      code: ex?.response.status,
    };
  }

  const typeofException = ex as ApiRequestErrorType;
  if (
    ex.hasOwnProperty('response') &&
    typeof typeofException.response.data.message === 'string' &&
    ex.hasOwnProperty('code') &&
    typeof typeofException.response.status === 'number'
  ) {
    return {
      message: typeofException.response.data.message,
      code: typeofException.response.status,
    };
  }

  return InternalServerError;
};
