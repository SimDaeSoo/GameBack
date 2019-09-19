import { NextFunction, Request, Response, Router } from 'express';
import AuthController from '../controller/AuthController';

export class AuthAPIRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    private async routes() {
        this.router.post('/login', this.login);
        this.router.post('/register', this.register);
        this.router.post('/clear', this.clear);
    }

    // const query: any = JSON.parse(request.query.data); // <= GET 
    // const body: any = request.body // <= POST
    private async login(request: Request, response: Response, next: NextFunction): Promise<void> {
        const body: any = request.body;
        const result: any = await AuthController.login(body);
        response.send(result);
    }

    private async register(request: Request, response: Response, next: NextFunction): Promise<void> {
        const body: any = request.body;
        const result: any = await AuthController.register(body);
        response.send(result);
    }

    private async clear(request: Request, response: Response, next: NextFunction): Promise<void> {
        const body: any = request.body;
        const result: any = await AuthController.clear(body);
        response.send(result);
    }
}