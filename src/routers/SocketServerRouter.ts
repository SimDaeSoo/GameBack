import { NextFunction, Request, Response, Router } from 'express';
import { IServerStatus, Store } from '../store/Store';

export class SocketServerRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    private async routes(): Promise<void> {
        this.router.post('/apply', this.apply);
        this.router.get('/status', this.status);
    }

    // const query: any = JSON.parse(request.query.data); // <= GET 
    // const body: any = request.body // <= POST
    private async apply(request: Request, response: Response, next: NextFunction): Promise<void> {
        const body: any = request.body;
        Store.instance.applyServer(body.serverStatus);
        response.send(body);
    }

    private async status(request: Request, response: Response, next: NextFunction): Promise<void> {
        response.send(Store.instance.serverStatuses);
    }
}