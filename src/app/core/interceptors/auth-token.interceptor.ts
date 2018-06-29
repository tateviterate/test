import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Store } from '@ngxs/store';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthState } from './../store/auth';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

    constructor(
        private store: Store
    ) {}

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const { Token } = this.store.selectSnapshot(AuthState.user);

        req = req.clone({ body: { ...req.body, Token }});

        return next.handle(req);
    }

}