import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class InterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var date = new Date();
        let gmt = date['toGMTString']();
        
        console.log(gmt)
        const duplicate = req.clone({
            url: "https://caliberbbwebapp.azurewebsites.net" + req.url,
            setHeaders: {
                'Content-Type': 'application/json',
                'Authorization': '',
                'x-ms-version': '2015-12-16',
                'x-ms-date': gmt,
            },

        });

        return next.handle(duplicate)
            .pipe(
                tap((result) => {
                    console.log('through interceptor success',duplicate)
                }, (err) => {
                    console.log('through interceptor error',duplicate)
                })
            )
    }
}