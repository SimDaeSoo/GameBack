export default class BaseResponse {
    public success: boolean = false;

    constructor(data: any) {
        for (let key in data) {
            this[key] = data[key];
        }
    }
}