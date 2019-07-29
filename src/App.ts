import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import { Request, Response, NextFunction } from "express";

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
    }

    // 여기서 서버에 필요한 객체들을 초기화 한다.
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

        router.get('/', (req: Request, res: Response, next: NextFunction) => {
            res.json({
                message: 'Hello World!'
            });
        });

        this.express.use('/', router);
    }
}

export default App;