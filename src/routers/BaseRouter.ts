import { NextFunction, Request, Response, Router } from 'express';
import debug from 'morgan';
import BaseResponse from '../networks/BaseResponse';

export default class BaseRouter {
    public router: Router;

    constructor() {
        this.router = Router();
    }

    // 왜 만들었냐면 => try, catch 계속 쓰는게 불편해서 Base에 기본처리 하려고 두었다가
    // Request, Response를 좀 명시적으로 보기좋게 쓰고싶어서 한번 더 바뀜.
    public routeHandler<T, U> (request: (new (arg: any) => T), handler: (request: T) => Promise<U>): (req: Request, res: Response, next: NextFunction) => void {
        return async (req: Request, res: Response, next: NextFunction) => {
            try {
                const result: U = await handler(new request(req));
                res.json(result);
            } catch (error) {
                const result: BaseResponse = new BaseResponse();
                result.success = false;
                res.json(result);
                next(error);
            }
        };
    }
}