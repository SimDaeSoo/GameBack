import { ILoginResult } from '../models/AccountModel';
import DB from '../common/DB';

export default class AuthController {
    public constructor() {
        this.login = this.login.bind(this);
    }

    public async login(): Promise<ILoginResult> {
        interface DataBaseResult {
        }

        // const result: DataBaseResult = DB.Instance.query<DataBaseResult>('',[]);

        // await DB.Instance.transaction(async (db: DB): Promise<void> => {
        //     db.query<DataBaseResult>('',[]);
        //     db.query<DataBaseResult>('',[]);
        //     throw new Error('fuck');
        // });

        const token: string = await this.makeToken('');
        await this.setToken('', token);

        return {
            token: token
        };
    }

    private async setToken(userKey: string, token: string): Promise<void> {
        // throw new Error('Set Token Error.');
    }

    private async makeToken(userKey: string): Promise<string> {
        return 'newtoken';
    }
}
