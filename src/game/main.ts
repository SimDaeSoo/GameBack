export class Game {
    constructor() {
        
    }

    public async start(): Promise<void> {
        let lastDate: number = Date.now();

        while(true) {
            const nowDate: number = Date.now();

            if (nowDate - lastDate < 10) continue;

            await this.update(nowDate - lastDate);
            lastDate = nowDate;
        }
    }

    public async update(dt: number): Promise<void> {
        console.log(dt);
    }
}

class ClientGame {
    constructor() {

    }
}