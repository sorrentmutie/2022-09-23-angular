import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private rnd = 0;
  constructor(private httpClient: HttpClient) {
    this.rnd= Math.random();
    console.log(this.rnd);
  }

  getInitSeed(){
    return this.rnd;
  }


  getProducts(): Product[] {
    return [
      {id: 1, name: "Frigorifero", available: true, date: new Date(), price: 600},
      {id: 2, name: "TV", available: true, date: new Date(), price: 600},
      {id: 3, name: "STEREO", available: true, date: new Date(), price: 600}
    ];
  }

  getProductsAsObservable(): Observable<Product[]> {
    return of(this.getProducts());
  }

  getProductsFromAPI(): Observable<Product[]>
  {
      return this.httpClient.get<Product[]>(environment.productsUrl);
  }


  getBestProducts(): Product[] {
    return [
      {id: 4, name: "yyyFrigorifero", available: true, date: new Date(), price: 600},
      {id: 5, name: "yyyTV", available: true, date: new Date(), price: 600},
      {id: 6, name: "yyyySTEREO", available: true, date: new Date(), price: 600}
    ];
  }

}
