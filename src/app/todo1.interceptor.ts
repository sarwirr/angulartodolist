import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Todo1Interceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

   // Get the user's token
   const token = localStorage.getItem('token');

   // Add the user's token to the request header
   if (token) {
     request = request.clone({
       setHeaders: {
         Authorization: `Bearer ${token}`
       }
     });
   }

   // Send the modified request
   return next.handle(request);
   
  }
}
