import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

Injectable()
export class HttpErrorHandlingInterceptor implements HttpInterceptor {

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        return next.handle(req).pipe(
            map((response: any) => {
                const result = (response.body) ? response.body : response;
                
                if (result.ResponseCode && result.ResponseCode !== 0) {
                    throw response;
                }

                return response;
            }),
            catchError((error: any) => {
                if (error instanceof HttpResponse) {
                    return this.apiErrorHandler(error);
                } else {
                    return this.serverErrorHandler(error);
                }
            })
        );
    }

    private serverErrorHandler(error: Response) {

        const errorBody = error.statusText || '';

        const errorMessage = this.getServerErrorMessage(errorBody);

        return throwError(errorMessage);
    }

    private apiErrorHandler(error: any): Observable<any> {

        const errorBody = error.body || '';

        const errorMessage = this.getApiErrorMessage(errorBody);

        return throwError(errorMessage);
    }

    private getApiErrorMessage(errorBody: any): string {
        return (!errorBody.type) ? `${errorBody.ResponseCode} - ${errorBody.Description || ''}` : `An unknown error occurred.`;
    }

    private getServerErrorMessage(errorBody: any) {
        return errorBody.Message ? errorBody.Message : errorBody.toString();
    }
}