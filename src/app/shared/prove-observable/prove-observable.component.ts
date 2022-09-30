import { Component } from '@angular/core';
import { filter, map, of, range } from 'rxjs';

@Component({
  selector: 'app-prove-observable',
  templateUrl: './prove-observable.component.html',
  styleUrls: ['./prove-observable.component.css']
})
export class ProveObservableComponent {

  constructor(){
    const  myObservable =   of(1,3,4,7,8,12);
    const mySecondObservable$ = range(0,100);

    const myObserver = {
      next: (numero:number) => console.log(numero),
      error: (err: Error) => console.log(err.message),
      complete: () => console.log('Flusso terminato')
    }

   // myObservable.subscribe( myObserver);

   mySecondObservable$.pipe(
    map( numero =>  numero * 3 ),
    filter( numero => numero % 2 === 0 )
   ).subscribe( x => console.log(x))


  }

}
