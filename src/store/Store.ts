import { IServerStatus } from "../interface/define";
import { SERVER_NAME } from "../define/serverName";

export class Store {
    private static _instance: Store;
    private updaterID: any;
    public serverStatuses: Array<IServerStatus>;

    constructor() {
        this.onUpdate();
    }

    public static get instance(): Store {
        if (!this._instance) {
            this._instance = new this();
            this._instance.initialize();
        }

        return this._instance;
    }

    public initialize(): void {
        this.serverStatuses = [];
    }

    public applyServer(status: IServerStatus): void {
        let flag: boolean = true;

        this.serverStatuses.forEach((serverStatus: IServerStatus, index: number) => {
            if (serverStatus.address === status.address) {
                serverStatus.user = status.user;
                serverStatus.ups = status.ups;
                serverStatus.ping = status.ping;
                serverStatus.address = status.address;
                serverStatus.name = SERVER_NAME[status.address] ? SERVER_NAME[status.address] : 'DEFAUT';
                serverStatus.date = Date.now();
                flag = false;
            }
        });

        if (flag) {
            this.serverStatuses.push(Object.assign({ date: Date.now(), name: SERVER_NAME[status.address] ? SERVER_NAME[status.address] : 'DEFAUT' }, status));
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
        }, 4000);
    }

    public stop(): void {
        clearInterval(this.updaterID);
    }
}