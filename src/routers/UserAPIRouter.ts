import { NextFunction, Request, Response, Router } from 'express';
import UserController from '../controller/UserController';
import { IInventory } from '../models/UserModel';

export class UserAPIRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    private async routes() {
        // 레퍼 한번 생각.
        this.router.get('/:userkey/inventory', async (req: Request, res: Response, next: NextFunction) => {
            try {
                const userkey = req.param('userkey');
                const inventory: IInventory = await new UserController().getInventory(req);
    
                res.json({
                    message: `${inventory.data} ${userkey}`
                });
            } catch (error) {

            }
        });

        this.router.get('/:userkey', async (req: Request, res: Response, next: NextFunction) => {
            try {
                const userkey = req.param('userkey');
                res.json({
                    message: userkey
                });
            } catch (error) {

            }
        });
    }
}
