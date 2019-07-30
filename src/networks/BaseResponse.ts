export default class BaseResponse {
    public success: boolean = false;
    public data: object = {};

    constructor(data?: any) {
        for (let key in data) {
            this.data[key] = data[key];
        }
    }
}