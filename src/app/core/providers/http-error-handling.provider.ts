import { Provider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorHandlingInterceptor } from './../interceptors/http-error-handling.interceptor';

export const HTTP_ERROR_HANDLING_INTERCEPTOR: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorHandlingInterceptor,
    multi: true
}
