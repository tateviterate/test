export class ResponseModel<T> {
    public Description: string;
    public ResponseCode: number;
    public ResponseObject?: T;
}
