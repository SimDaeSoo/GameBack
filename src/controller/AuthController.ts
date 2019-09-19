import AuthModel from '../models/AuthModel';

// 여기 Return Interface 다 짜놔야겠다..
export default class AuthController {
    public static async login(data: any): Promise<any> {
        const result: any = { success: false, data: {} };
        const loginResult: any = AuthModel.login();
        return result;
    }

    public static async register(data: any): Promise<any> {
        const result: any = { success: false, data: {} };
        const registerResult: any = AuthModel.register();
        return result;
    }

    public static async clear(data: any): Promise<any> {
        const result: any = { success: false, data: {} };
        const clearResult: any = AuthModel.clear();
        return result;
    }
}