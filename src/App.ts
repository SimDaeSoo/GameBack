import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import { AuthAPIRouter } from './routers/AuthAPIRouter';

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
        const authAPIRouter: AuthAPIRouter = new AuthAPIRouter();
        this.express.use('/api/auth', authAPIRouter.router);
    }
}

export default App;