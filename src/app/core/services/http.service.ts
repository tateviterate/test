import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from './config.service';
import { StorageService } from './storage.service';
import { ResponseModel } from './../models/response.model';
import { forkJoin } from "rxjs";
import { map } from "rxjs/operators";


@Injectable({
    providedIn: 'root'
})
export class HttpService {

    private requestUrl: string;

    constructor(
        private http: HttpClient,
        private router: Router,
        private config: ConfigService,
        private storage: StorageService
    ) {
        this.requestUrl = this.config.requestUrl;
    }

    public get<T>(url: string, params?: any) {
        const options = {
            params: params || null,
        }
        return this.http.get<T>(url, options);
    }

    public post<T>(url: string, body: any) {
        return this.http.post<ResponseModel<T>>(url, body);
    }

    public apiRequest<T>(body: any) {
        return this.post<T>(`${this.requestUrl}/ApiRequest`, body)
        .pipe(
            map(response =>response.ResponseObject)
        );
    }

    public LoginUser<T>(body: any) {
        return this.http.post<T>(`${this.requestUrl}/LoginUser`, body);
    }

    public ValidateToken<T>(token: string) {
        const params = {
            token: token
        }

        return this.get<T>(`${this.requestUrl}/ValidateToken`, params);
    }

    public GetAvailableLanguages<T>(body: any) {
        return this.post<T>(`${this.requestUrl}/GetAvailableLanguages`, body);
    }

    public requestError(error: ResponseModel<any>) {
        if (
            (error.ResponseCode === 28 || error.ResponseCode === 29) &&
            this.router.url !== '/login'
        ) {
            this.storage.remove('token');
            this.storage.remove('udata');
            this.router.navigate(['login']);
        }
        else {
            console.error(error.Description);
        }
    }
    public requestAll(requests: any) {
        return forkJoin(requests);
    }
}