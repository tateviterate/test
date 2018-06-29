import { LoginRequestModel, LoginResponseModel } from './auth.model';

export class Login {
    static readonly type = '[Auth] Login';
    constructor(public payload: LoginRequestModel) { }
}

export class LoginSuccess {
    static type = '[Auth] LoginSuccess';
    constructor(public user: LoginResponseModel) { }
}

export class LoginFailed {
    static type = '[Auth] LoginFailed';
    constructor(public error: any) { }
}

export class Logout {
    static readonly type = '[Auth] Logout';
}

export class LogoutSuccess {
    static type = '[Auth] LogoutSuccess';
}

export class LogoutFailed {
    static type = '[Auth] LogoutFailed';
    constructor(public error: any) { }
}