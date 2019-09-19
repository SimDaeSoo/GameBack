export const enum ERROR_CODE {
    SUCCESS = 1,
    WRONG_REQUEST = 2,
    QUERY_ERROR = 3,
    UNKNOWN = 4
};

export interface IResponse {
    success: ERROR_CODE;
    data: any;
};