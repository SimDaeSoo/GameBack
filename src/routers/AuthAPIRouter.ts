import BaseRouter from './BaseRouter';
import AuthController from '../controller/AuthController';
import { ILoginResult } from '../models/AccountModel';
import { AuthLoginRequest } from '../networks/requestresponse/AccountRequest';
import { AuthLoginResponse } from '../networks/requestresponse/AccountResponse';

export class AuthAPIRouter extends BaseRouter {
    constructor() {
        super();
        this.routes();
    }

    private async routes() {
        this.router.get('/login', this.routeHandler<AuthLoginRequest, AuthLoginResponse>(AuthLoginRequest, this.login));
    }

    private async login(request: AuthLoginRequest): Promise<AuthLoginResponse> {
        const data: ILoginResult = await new AuthController().login();
        const response: AuthLoginResponse = new AuthLoginResponse(data);

        response.success = true;
        return response;
    }
}
