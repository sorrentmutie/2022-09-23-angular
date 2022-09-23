import { Component } from '@angular/core';
import { Product, ProductClass } from './products/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-demo';

  constructor(){
  }
}
