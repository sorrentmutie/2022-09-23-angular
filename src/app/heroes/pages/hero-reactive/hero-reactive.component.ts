import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReqresService } from 'src/app/reqres/services/reqres.service';
import { MyValidator } from './my-validator';
import { debounceTime, filter, Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-reactive',
  templateUrl: './hero-reactive.component.html',
  styleUrls: ['./hero-reactive.component.css']
})
export class HeroReactiveComponent  {

  // myControl: FormControl | undefined = undefined;
  // observableValue : Observable<string> | undefined = undefined;

  myForm: FormGroup | undefined = undefined;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private service: ReqresService) {
    this.myForm = fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(5), MyValidator]],
        lastName: ['', [Validators.required]],
        city: ['']
      }
    );
   const x =  this.myForm.get('firstName')?.valueChanges.pipe(
        filter(x => x.length > 3),
        debounceTime(1000),
        switchMap( x => {
          return this.service.postSomeData( { name: x , job: x })
        })
   );

   x?.subscribe(data => console.log(data));

   const id = this.route.snapshot.paramMap.get('id');
   if(id) {
    console.log(id);
   }


  //  .subscribe(
  //     valore => {
  //       const y = this.service.postSomeData( { name: valore , job: valore });
  //       y.subscribe(data => console.log(data));
  //     }
  //   );




    // this.myControl = new FormControl('');
    // this.observableValue = this.myControl.valueChanges.pipe(
    //   filter(x => x.length > 3),
    //   debounceTime(1000)
    // );
    // this.observableValue.pipe(
    //   filter(x => x.length > 3),
    //   debounceTime(1000)

    // ).subscribe( parola => {
    //     console.log(parola);
    // });
  }

  // save(){
  //   const myValue = this.myControl?.value;
  //   console.log(myValue);
  //   this.myControl?.setValue("nuovo valore");
  // }

  submit(){
     const nome: string  = this.myForm!.get('firstName')!.value;
     const cognome: string  = this.myForm!.get('lastName')!.value;
     const city: string  = this.myForm!.get('city')!.value;
  }

  get firstName() {
    return this.myForm!.get('firstName');
  }

  get lastName() {
    return this.myForm!.get('lastName');
  }

}
