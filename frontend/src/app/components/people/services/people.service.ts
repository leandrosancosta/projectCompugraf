import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {


  constructor(private http: HttpClient) { }

  public list(){
    return this.http.get<any>(`http://localhost:52770/api/people/list`);
  }

  public add(model: Person){

    return this.http.post<any>(`http://localhost:52770/api/people/add`,model);

  }
}
