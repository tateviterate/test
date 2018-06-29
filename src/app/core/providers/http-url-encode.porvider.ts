import { Provider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpUrlEncodeInterceptor } from './../interceptors/http-url-encode.interceptor';

export const HTTP_URL_ENCODE_INTERCEPTOR: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpUrlEncodeInterceptor,
    multi: true
}
