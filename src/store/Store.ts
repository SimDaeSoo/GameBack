export interface IServerStatus {
    address: string;
    user: number;
    ups: number;
    ping: number;
    date?: number;
}

export class Store {
    private static _instance: Store;
    private updaterID: any;
    public serverStatus: Array<IServerStatus> = [];

    constructor() {
        this.onUpdate();
    }

    public static get instance(): Store {
        if (!this._instance) {
            this._instance = new this();
        }

        return this._instance;
    }

    public applyServer(status: IServerStatus): void {
        let flag: boolean = true;

        this.serverStatus.forEach((serverStatus: IServerStatus) => {
            if (serverStatus.address === status.address) {
                serverStatus.date = Date.now();
                flag = false;
            }
        });

        if (flag) {
            this.serverStatus.push(Object.assign({ date: Date.now() }, status));
        }
    }

    private deleteDeadServer(): void {
        const LIMIT: number = 1000 * 4;
        const deleteServers: Array<IServerStatus> = [];

        this.serverStatus.forEach((status: IServerStatus) => {
            if (Date.now() - status.date > LIMIT) {
                deleteServers.push(status);
            }
        });

        deleteServers.forEach((status: IServerStatus) => {
            const index: number = this.serverStatus.indexOf(status);
            this.serverStatus.splice(index, 1);
        });
    }

    public onUpdate(): void {
        this.updaterID = setInterval(async () => {
            this.deleteDeadServer();
            console.log(this.serverStatus);
        }, 2000);
    }

    public stop(): void {
        clearInterval(this.updaterID);
    }
}