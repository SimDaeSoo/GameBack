import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import { Request, Response, NextFunction } from "express";
import { UserAPIRouter } from './routers/UserAPIRouter';

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
    }

    public async init(): Promise<void> {
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json({ limit: '10mb' }));
        this.express.use(bodyParser.urlencoded({ extended: false, limit: '10mb', parameterLimit: 1000000 }));
    }

    private routes(): void {
        const router: express.Router = express.Router();
        const userAPIRouter: UserAPIRouter = new UserAPIRouter();

        router.get('/', (req: Request, res: Response, next: NextFunction) => {
            res.json({
                message: 'Hello World!'
            });
        });

        this.express.use('/api/user', userAPIRouter.router);
    }
}

export default App;