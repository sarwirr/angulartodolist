import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class Todo1Interceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // check if the URL of the request is in the list of excluded routes
    const excludedRoutes = ['/', '/login', '/registration'];
    if (excludedRoutes.includes(req.url)) {
      return next.handle(req);
    }
    // interceptor logic
    const token = localStorage.getItem('token');
    const authReq = req.clone({
      setHeaders: { Authorization:`Bearer ${token}`}
    });
    return next.handle(authReq);

  }
}
