import { Request } from 'express';

export default class BaseRequest {
    public params: any;
    
    constructor(request: Request) {
        this.params = request.params;
    }
}