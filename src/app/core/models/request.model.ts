export class RequestModel<T = {}> {

    public Controller: string;
    public Method: string;
    public RequestObject: T;
    public Token: string;

    constructor(
        controller: string,
        method: string,
        dataObject?: T
    ) {
        this.Controller = controller;
        this.Method = method;
        this.RequestObject = this.getRequestObject(dataObject);
    }

    private getRequestObject(data: T): T {
        let dataObject = {} as T;
        
        if (typeof data !== undefined) {
            dataObject = data;
        }

        return dataObject;
    }

}