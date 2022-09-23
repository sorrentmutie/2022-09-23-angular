import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'first'
})
export class FirstPipe implements PipeTransform {

  transform(value: string, specialChar: string): string {
    return value.replace('o', specialChar);
  }

}
