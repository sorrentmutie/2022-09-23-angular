import { Component, OnChanges, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../../product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-observable-products',
  templateUrl: './observable-products.component.html',
  styleUrls: ['./observable-products.component.css']
})
export class ObservableProductsComponent  implements  OnDestroy {

  // products: Product[] | undefined = undefined;
  // subscription: Subscription | undefined = undefined;
  observableProducts: Observable<Product[]> | undefined = undefined;

  constructor(private service: ProductsService) {

   // this.observableProducts = this.service.getProductsAsObservable();
      this.observableProducts = this.service.getProductsFromAPI();

    // this.subscription = this.service.getProductsAsObservable().subscribe(
    //   prodotti => this.products = prodotti
    // );
  }


  ngOnDestroy(): void {
    //this.subscription?.unsubscribe();
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   throw new Error('Method not implemented.');
  // }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }


}
