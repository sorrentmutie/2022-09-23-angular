import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prove-inout',
  templateUrl: './prove-inout.component.html',
  styleUrls: ['./prove-inout.component.css']
})
export class ProveInoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp2(value: string) {
    console.log(value);
  }

  onKeyUp(payload: KeyboardEvent){
    const myInput = payload.target as HTMLInputElement;
    console.log(myInput.value);

    //console.log(payload.target.value);
  }

}
