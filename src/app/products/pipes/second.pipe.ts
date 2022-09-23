import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product';

@Pipe({
  name: 'second'
})
export class SecondPipe implements PipeTransform {

  transform(product: Product): string {
    return 'ID =' + product.id + "; NAME =" + product.name;
  }

}
