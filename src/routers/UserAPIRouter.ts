import { Router } from 'express';
import UserController from '../controller/UserController';

export class UserAPIRouter {
    public router: Router;
    public userController: UserController;

    constructor() {
        this.router = Router();
        this.userController = new UserController();

        this.routes();
    }

    private routes() {
        this.router.get('/inventory', this.userController.inventory);
    }
}
