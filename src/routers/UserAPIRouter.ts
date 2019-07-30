import BaseRouter from './BaseRouter';
import UserController from '../controller/UserController';
import { IInventory } from '../models/UserModel';
import { GetInventoryRequest, GetInventoryResponse } from '../networks/requestresponse/UserRequest';

export class UserAPIRouter extends BaseRouter {
    constructor() {
        super();
        this.routes();
    }

    private async routes() {
        this.router.get('/:userkey/inventory', this.routeHandler<GetInventoryRequest, GetInventoryResponse>(GetInventoryRequest, this.getInventory));
    }

    private async getInventory(request: GetInventoryRequest): Promise<GetInventoryResponse> {
        const key = request.params.userkey;
        const data: IInventory = await new UserController().getInventory(key);

        return new GetInventoryResponse(data);
    }
}
