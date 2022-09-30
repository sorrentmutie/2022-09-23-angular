import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class FirstInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Sono nel primo interceptor');
    console.log(request);
    return next.handle(request).pipe(tap( evento => {
      if(evento instanceof HttpResponse) {
        
        console.log('Sono in handle della response del primo interceptor')
        console.log(evento);
      }
    }));
  }
}
