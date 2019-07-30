import { Request } from 'express';
import BaseRequest from "../BaseRequest";
import BaseResponse from "../BaseResponse";
import { IInventory } from '../../models/UserModel';

export class GetInventoryRequest extends BaseRequest {
    constructor(request: Request) {
        super(request);
    }
}

export class GetInventoryResponse extends BaseResponse {
    constructor(data: IInventory) {
        super(data);
    }
}