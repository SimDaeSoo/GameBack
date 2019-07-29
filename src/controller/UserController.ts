import { NextFunction, Request, Response } from 'express';
export default class Usercontroller {
    public constructor() {
        this.inventory = this.inventory.bind(this);
    }

    public async inventory(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.json({
            message: 'inventory'
        });
    }
}
