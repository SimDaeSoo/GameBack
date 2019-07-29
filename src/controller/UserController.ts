import { Request } from 'express';
import { IInventory } from '../models/UserModel';
export default class UserController {
    public constructor() {
        this.getInventory = this.getInventory.bind(this);
    }

    public async getInventory(req: Request): Promise<IInventory> {
        return {
            data: 'getInventory'
        };
    }
}
