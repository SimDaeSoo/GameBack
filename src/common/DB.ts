import mysql from 'mysql2/promise';

interface IDataBaseOption {
    host: string,
    user: string,
    password: string,
    database: string,
    connectionLimit: number,
    charset: string,
    connectTimeout: number
}

export default class DB {
    private static _instance: DB;
    private cofig: IDataBaseOption;
    private pool: any;

    private constructor() {
        const DEFAULT_CONFIG: IDataBaseOption = {
            host: 'localhost',
            user: 'root',
            password: '',
            database: '',
            connectionLimit: 20,
            charset: 'UTF8MB4_UNICODE_CI',
            connectTimeout: 10000
        };

        this.pool = mysql.createPool(DEFAULT_CONFIG);
    }

    public static get Instance() {
        if (this._instance === undefined) {
            this._instance = new this();
        }

        return this._instance;
    }

    public async transaction(func: (db: DB) => void): Promise<void> {
        try {
            await this.pool.beginTransaction(); // START TRANSACTION

            await func(this);
            
			await this.pool.commit(); // COMMIT
			this.pool.release();
		} catch(err) {
			await this.pool.rollback(); // ROLLBACK
            this.pool.release();
		}
    }

    public async query<T>(query: string, args?: any[]): Promise<Array<T>> {
        let result;
        let elapsedTimeMs = new Date().getTime();

        if (args) {
            result = (await this.pool.query(query, args))[0];
        } else {
            result = (await this.pool.query(query))[0];
        }

        elapsedTimeMs = new Date().getTime() - elapsedTimeMs;

        // INSERT 와 같은 쿼리는 배열이 아님. 사용하는 쪽에서 일관성있게 사용하게 하기 위해 배열로 맞춤.
        return Array.isArray(result) ? result as any[] : [result] as any[];
    }
}