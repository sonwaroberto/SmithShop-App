import axios, {AxiosResponse} from 'axios';
const NEXT_PUBLIC_SERVER_URL = 'http://localhost:5001/api';
export const InternalServerError = {
  message: 'Internal error occured during the request.',
  code: -500,
};

export const onFulfilledRequest = (response: AxiosResponse) => response;

export const onRejectedRequest = () => Promise.reject(InternalServerError);

export const publicApiRequest = (url?: string) => {
  const baseURL = url !== undefined ? url : `${NEXT_PUBLIC_SERVER_URL}`;
  console.log('Base URL:', baseURL);

  return axios.create({
    baseURL: baseURL,
  });
};

publicApiRequest().interceptors.response.use(
  onFulfilledRequest,
  onRejectedRequest,
);
