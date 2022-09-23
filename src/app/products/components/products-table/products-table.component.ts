import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent {
  @Input() products: Product[] | undefined = [];
  @Output() emitter: EventEmitter<Product> = new EventEmitter<Product>();

  doSomething(selectedProduct: Product) {
    // alert(selectedProduct.name);
    this.emitter.emit(selectedProduct);
  }
}
