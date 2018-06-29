import { RequestModel } from './../../models/request.model';

export class LoginRequestModel {
    UserName: string;
    Password: string;
    AdminSiteUrl?: string;
}

export class LoginResponseModel {
    PartnerId: number;
    UserId: number;
    LoginIp: string;
    LanguageId: string;
    SessionId: number;
    Token: string;
    UserName: string;
    UserLogin: string;
    CurrencyId: string;
    ResponseCode: number;
    Description: string
}

export class LogoutRequestModel extends RequestModel {
    constructor(
        controller: string,
        method: string,
    ) {
        super(controller, method);
        delete this.RequestObject;
    }
}

export class AuthStateModel {
    isLoading: boolean;
    user: LoginResponseModel;
    error: string
}

