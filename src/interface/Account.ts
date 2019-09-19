export interface IAccount {
    id: string;
    uid: string;
    password: string;
    salt: string;
    status: string;
};

export interface ILoginData {
    id: string;
    password: string;
};

export interface ILoginResult {
    success: boolean,
    uid: string
};

export interface IClearData {
    uid: string
};

export interface IClearResult {
    success: boolean
};