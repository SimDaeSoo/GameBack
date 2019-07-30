import { Request } from 'express';
import BaseRequest from "../BaseRequest";

export class AuthLoginRequest extends BaseRequest {
    constructor(request: Request) {
        super(request);
    }
}