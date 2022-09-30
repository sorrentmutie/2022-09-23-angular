import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class SecondInterceptor implements HttpInterceptor {

  token = "xxxxxxx";
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const cloneRichiesta = request.clone(
      {headers: request.headers.set('Authorization', 'Bearer ' + this.token)}
    );

    console.log('Sono nel secondo interceptor');
    console.log(cloneRichiesta);
    return next.handle(request).pipe(tap( evento => {
      console.log('Sono in handle della response del secondo interceptor')
      console.log(evento);
    }));
  }
}
