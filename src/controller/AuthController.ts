import DB from '../common/DB';
import { IAccount, ILoginData, ILoginResult, IClearData, IClearResult } from '../interface/Account';
import * as crypto from 'crypto';

export default class AuthController {
    public static async login(data: ILoginData): Promise<ILoginResult> {
        const result: ILoginResult = { success: false, uid: '' }
        const query: string = `SELECT * FROM accounts WHERE \`id\` && \'password\' = (?,?);`;
        const params: Array<any> = [data.id, data.password];
        const account: IAccount = (await DB.Instance.query<IAccount>(query, params))[0];

        result.success = account !== undefined;
        result.uid = account ? account.uid : '';

        return result;
    }

    public static async clear(data: IClearData): Promise<IClearResult> {
        const result: IClearResult = { success: false };

        const transactionResult: boolean = await DB.Instance.transaction([
            { query: 'DELETE FROM accounts WHERE `uid` = ?;', args: [data.uid] }
        ]);

        result.success = transactionResult;

        return result;
    }
}

/*
const updateResult: any = (await DB.Instance.query(`UPDATE player SET \`currentFloor\` = ?, \`x\` = ?, \`y\` = ?, \`input\` = ?, \`positionUpdated\` = ? WHERE \`uid\` = ?;`, []))[0];
const insertResult: any = (await DB.Instance.query(`INSERT INTO floors (\`uid\`, \`floor\`, \`seed\`) VALUES (?,?,?);`, []))[0];
*/