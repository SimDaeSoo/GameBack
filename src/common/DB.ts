import { DEV_CONFIG } from '../../config/DB';

interface IDataBaseOption {
    host: string,
    port: number,
    user: string,
    password: string,
    database: string,
    connectionLimit: number,
    charset: string,
    connectTimeout: number
}

export default class DB {
    private static _instance: DB;
    public pool: any;

    private constructor() {
        const mysql = require('mysql2/promise');
        const DEFAULT_CONFIG: IDataBaseOption = DEV_CONFIG as IDataBaseOption;
        this.pool = mysql.createPool(DEFAULT_CONFIG);
    }

    public static get Instance() {
        if (this._instance === undefined) {
            this._instance = new this();
        }

        return this._instance;
    }

    public async transaction(querys: { query: string, args?: any[] }[]): Promise<boolean> {
        const connection = await DB.Instance.pool.getConnection(async conn => conn);

        try {
            await connection.beginTransaction(); // START TRANSACTION

            for (let index in querys) {
                const query = querys[index].query;
                const args = querys[index].args;
                await connection.query(...[query, args]);
            }

            await connection.commit(); // COMMIT
            connection.release();

            return true;
        } catch (err) {
            console.log('Transaction Error!.');
            await connection.rollback(); // ROLLBACK
            connection.release();
        }

        return false;
    }

    public async query<T>(query: string, args?: any[]): Promise<Array<T>> {
        let result;
        let elapsedTimeMs = new Date().getTime();
        const connection = await DB.Instance.pool.getConnection(async conn => conn);

        try {
            result = await connection.query(...[query, args]);
        } catch (err) {
            console.log('Query Error!.');
            throw ('error');
        }

        connection.release();
        elapsedTimeMs = new Date().getTime() - elapsedTimeMs;
        console.log(query, `${elapsedTimeMs} ms`);

        // INSERT 와 같은 쿼리는 배열이 아님. 사용하는 쪽에서 일관성있게 사용하게 하기 위해 배열로 맞춤.
        return Array.isArray(result) ? result as any[] : [result] as any[];
    }
}