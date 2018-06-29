import { Provider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthTokenInterceptor } from './../interceptors/auth-token.interceptor';

export const AUTH_TOKEN_INTERCEPTOR: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthTokenInterceptor,
    multi: true
}
