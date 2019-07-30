import { Request } from 'express';
import { IInventory } from '../models/UserModel';
export default class UserController {
    public constructor() {
        this.getInventory = this.getInventory.bind(this);
    }

    public async getInventory(userKey: string): Promise<IInventory> {
        // db에서 get 해온다.
        const inventory: IInventory = await this.getInventoryData(userKey);

        return inventory;
    }

    // 임시로 만들어 둔 것..
    private async getInventoryData(userKey: string): Promise<IInventory> {
        return {
            data: [
                {
                    id: userKey,
                    count: 1
                }
            ]
        }
    }
}
