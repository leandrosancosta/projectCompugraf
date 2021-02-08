import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalService {
  baseAPI: string = "https://viacep.com.br/ws/"
  constructor(private http: HttpClient) { }

  public getCEP(cep){
    return this.http.get<any>(`${this.baseAPI}/${cep}/json`);
  }
}
