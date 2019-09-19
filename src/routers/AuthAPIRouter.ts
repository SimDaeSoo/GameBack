import { NextFunction, Request, Response, Router } from 'express';
import AuthController from '../controller/AuthController';
import { ILoginData, ILoginResult, IClearResult } from '../interface/Account';
import { IResponse, ERROR_CODE } from '../interface/define';

export class AuthAPIRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    private async routes(): Promise<void> {
        this.router.post('/login', this.login);
        this.router.post('/clear', this.clear);
    }

    // const query: any = JSON.parse(request.query.data); // <= GET 
    // const body: any = request.body // <= POST
    private async login(request: Request, response: Response, next: NextFunction): Promise<void> {
        const responseData: IResponse = { success: ERROR_CODE.SUCCESS, data: {} };
        const body: ILoginData = request.body;

        const loginResult: ILoginResult = await AuthController.login(body);

        if (loginResult.success) {
            responseData.success = ERROR_CODE.SUCCESS;
            responseData.data.uid = loginResult.uid;
        }

        response.send(responseData);
    }

    private async clear(request: Request, response: Response, next: NextFunction): Promise<void> {
        const responseData: IResponse = { success: ERROR_CODE.SUCCESS, data: {} };
        const body: ILoginData = request.body;

        const loginResult: ILoginResult = await AuthController.login(body);
        const clearResult: IClearResult = await AuthController.clear(loginResult);

        if (clearResult.success) {
            responseData.success = ERROR_CODE.SUCCESS;
        }

        response.send(responseData);
    }
}