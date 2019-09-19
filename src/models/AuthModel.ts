import DB from '../common/DB';
import * as crypto from 'crypto';

export default class AuthModel {

    public static async login(): Promise<void> {
    }
    public static async register(): Promise<void> {
    }
    public static async clear(): Promise<void> {
    }

    public static async test2(): Promise<void> {
        const updateResult: any = (await DB.Instance.query(`UPDATE player SET \`currentFloor\` = ?, \`x\` = ?, \`y\` = ?, \`input\` = ?, \`positionUpdated\` = ? WHERE \`uid\` = ?;`, []));
        const insertResult: any = (await DB.Instance.query(`INSERT INTO floors (\`uid\`, \`floor\`, \`seed\`) VALUES (?,?,?);`, []));
        const player: any = (await DB.Instance.query(`SELECT * FROM player WHERE \`uid\` = ?;`, []))[0];
        const transactionResult: boolean = await DB.Instance.transaction([
            { query: 'DELETE FROM floors WHERE `uid` = ?;', args: [] },
            { query: 'DELETE FROM interactions WHERE `uid` = ?;', args: [] },
        ]);
    }
}