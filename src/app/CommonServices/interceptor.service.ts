import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class InterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const duplicate = req.clone({
           //https://gentle-brushlands-56872.herokuapp.com
            url: "https://gentle-brushlands-56872.herokuapp.com" + req.url,
            headers: req.headers.set('Content-Type', 'application/json')
        });
        return next.handle(duplicate)
            .pipe(
                tap((result) => {
                    console.log('through interceptor success')
                }, (err) => {
                    console.log('through interceptor error')
                })
            )
    }
}