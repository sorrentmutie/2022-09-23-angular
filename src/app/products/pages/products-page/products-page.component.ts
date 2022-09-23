import { Component } from '@angular/core';
import { Product } from '../../product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent  {

  prodotti : Product[] | undefined  = [];

  constructor(private productsService: ProductsService) {
     this.prodotti = productsService.getProducts();
  }

  onEmit(product: Product) {
    console.log(product.id);
  }

}
