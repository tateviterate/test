import { Provider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpParametrizeInterceptor } from './../interceptors/http-parametrize.interceptor';

export const HTTP_PARAMETRIZE_INTERCEPTOR: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpParametrizeInterceptor,
    multi: true
}
