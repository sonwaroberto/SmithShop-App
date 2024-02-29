export enum ApiRequestStatus {
  IDLE,
  PENDING,
  REJECTED,
  FULFILLED,
}

export type ApiRequestErrorType = {
  response: {
    data: {
      description: string;
      message: string;
    };
    status: number;
  };
};

export type StoredErrorResponseType = {
  message: string;
  code: number;
};

export type ApiRequestDataType<DataType = any> = {
  status: ApiRequestStatus;
  error?: StoredErrorResponseType;
  data?: DataType;
};
