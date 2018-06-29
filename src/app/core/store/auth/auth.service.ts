import { Injectable } from '@angular/core';
import { HttpService } from './../../services/http.service';
import { LoginRequestModel, LoginResponseModel, LogoutRequestModel } from './auth.model';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(
        private http: HttpService,
    ) {}

    public login(data: LoginRequestModel) {
        return this.http.LoginUser<LoginResponseModel>(data);
    }

    public logout() {
        const request = new LogoutRequestModel('User', 'Logout');
        return this.http.apiRequest(request);
    }
}

