import { Component, OnInit } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }
  isLogged = false;

  ngOnInit(): void {
  }

  naviga() {
   // this.router.navigate(['/heroes']);
   this.router.navigate(['/hero-reactive', 42]);
  }

  login(){
    this.auth.login().subscribe( x=> this.isLogged = x);
  }

  logout(){
    this.auth.logout();
    this.isLogged = false;
  }

}
