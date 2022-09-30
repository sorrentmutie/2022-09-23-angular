import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person, ReqResPostRequest, ReqResResponse, ReqResPostResponse } from '../models/reqres';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  constructor(private httpClient: HttpClient) {}

  getData(): Observable<ReqResResponse> {
    return this.httpClient.get<ReqResResponse>(environment.reqresUrl);
  }

  getPeople(): Observable<Person[]> {
    return this.getData().pipe( map(response =>  response.data));;
  }

  postSomeData(data: ReqResPostRequest): Observable<ReqResPostResponse> {
    return this.httpClient.post<ReqResPostResponse>(environment.reqResPostUrL, data);
  }


}
