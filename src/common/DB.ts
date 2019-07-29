export default class DB {
    private static _instance: DB;

    public static get Instance() {
        if (this._instance === undefined) {
            this._instance = new this();
        }

        return this._instance;
    }
}