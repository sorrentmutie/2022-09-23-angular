import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../../models/reqres';
import { ReqresService } from '../../services/reqres.service';

@Component({
  selector: 'app-reqres',
  templateUrl: './reqres.component.html',
  styleUrls: ['./reqres.component.css']
})
export class ReqresComponent  {

  //data: Observable<ReqResResponse | undefined> | undefined = undefined;
   data: Observable<Person[]> | undefined = undefined;
   constructor(private service: ReqresService) {
    this.data = this.service.getPeople();
  }

  postSomeData(){
    this.service.postSomeData({ name: "Salvatore", job: "Developer"})
    .subscribe(response => console.log(response));
  }


}
