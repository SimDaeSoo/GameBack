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
    public serverStatuses: Array<IServerStatus> = [];

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

        this.serverStatuses.forEach((serverStatus: IServerStatus) => {
            if (serverStatus.address === status.address) {
                serverStatus = status;
                serverStatus.date = Date.now();
                flag = false;
            }
        });

        if (flag) {
            this.serverStatuses.push(Object.assign({ date: Date.now() }, status));
        }
    }

    private deleteDeadServer(): void {
        const LIMIT: number = 1000 * 4;
        const deleteServers: Array<IServerStatus> = [];

        this.serverStatuses.forEach((status: IServerStatus) => {
            if (Date.now() - status.date > LIMIT) {
                deleteServers.push(status);
            }
        });

        deleteServers.forEach((status: IServerStatus) => {
            const index: number = this.serverStatuses.indexOf(status);
            this.serverStatuses.splice(index, 1);
        });
    }

    public onUpdate(): void {
        this.updaterID = setInterval(async () => {
            this.deleteDeadServer();
            this.printServerStatus();
        }, 4000);
    }

    private printServerStatus() {
        this.serverStatuses.forEach((status: IServerStatus) => {
            console.log(`${status.address}/${status.user}user/${status.ping}ping/${status.ups}ups`);
        })
    }

    public stop(): void {
        clearInterval(this.updaterID);
    }
}