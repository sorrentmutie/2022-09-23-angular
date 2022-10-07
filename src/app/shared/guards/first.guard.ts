import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ReqresService } from 'src/app/reqres/services/reqres.service';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FirstGuard implements CanActivate {


  constructor(private router: Router, private auth: AuthService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>{
    console.log('Siamo nella guard');


    if(!this.auth.isLogged) {
      this.router.navigate(['/']);
    } 
    return of(this.auth.isLogged);

    const random = Math.random();

    // if(random >= 0.5) {
    //   return of(true);
    // } else {
    //   this.router.navigate(['/']);
    //   return of(false);
    // }
  }

}
