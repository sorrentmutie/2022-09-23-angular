import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: boolean = false;

  constructor() { }


  login(): Observable<boolean> {

   return of(true).pipe(
    delay(1000),
    tap( valore => this.isLogged = valore )
   )

  }


  logout() {
    this.isLogged = false;
  }
}
