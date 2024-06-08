import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable, catchError } from "rxjs";
import { ErrorMessages } from "./error-messages";

export function httpErrorInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    return next(req)
        .pipe(
            catchError((error: HttpErrorResponse) => {
                switch (error.status) {
                    case 400: alert(ErrorMessages[400]); break;
                    case 404: alert(ErrorMessages[404]); break;
                }
                throw error;
            })
        )
}