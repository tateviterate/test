import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

Injectable()
export class HttpUrlEncodeInterceptor implements HttpInterceptor {

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let apiRequest = this.urlEncodingRequest(req)
        apiRequest = this.encodeBody(apiRequest);

        return next.handle(apiRequest);
    }

    private urlEncodingRequest(req: HttpRequest<any>): HttpRequest<any> {
        return req.clone({
            setHeaders: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
    }

    private encodeBody(req: HttpRequest<any>): HttpRequest<any> {

        let params: string[] = [];

        Object.entries(req.body).forEach((entry) => {
            let [key, value] = entry;

            if (key === 'RequestObject') {
                value = JSON.stringify(value);
            }

            let bodyKey = encodeURIComponent(key);
            let bodyValue = encodeURIComponent(value as string);

            params.push(bodyKey + '=' + bodyValue);
        });

        return req.clone({
            body: params.join("&")
        });
    }
}