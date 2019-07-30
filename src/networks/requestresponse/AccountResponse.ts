import BaseResponse from "../BaseResponse";
import { ILoginResult } from '../../models/AccountModel';

export class AuthLoginResponse extends BaseResponse {
    constructor(data: ILoginResult) {
        super(data);
    }
}