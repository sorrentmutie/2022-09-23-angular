import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-best-products-page',
  templateUrl: './best-products-page.component.html',
  styleUrls: ['./best-products-page.component.css'],
  providers: [ProductsService]
})
export class BestProductsPageComponent  {

  prodotti: Product[] = [];

  constructor(private service: ProductsService){
    this.prodotti = this.service.getBestProducts();
  }



  onBestProductEmit(message: Product) {
    console.log(message.price);
  }

}
