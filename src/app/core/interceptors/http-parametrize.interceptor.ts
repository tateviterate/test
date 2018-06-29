import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpParams, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

Injectable()
export class HttpParametrizeInterceptor implements HttpInterceptor {

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let apiRequest = this.parametrizeRequest(req);
        return next.handle(apiRequest);
    }

    private parametrizeRequest(req: HttpRequest<any>): HttpRequest<any> {

        let httpParams = this.getParams();

        if (!('token' in req.params)) {
            httpParams = httpParams.set('token', req.params['token'])
        }

        return req.clone({
            params: httpParams
        });
    }

    private getParams(): HttpParams {
        let httpParams = new HttpParams();
        //let language = this.inj.get(LanguageService);


        //let gmt = this.config.gmt.toString();
        httpParams = httpParams.set("TimeZone", '4');

        //let lang = language.getDefaultLanguage();
        httpParams = httpParams.set("LanguageId", 'en');

        return httpParams;
    }
}