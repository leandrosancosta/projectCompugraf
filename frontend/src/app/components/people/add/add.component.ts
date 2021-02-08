import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';
import { UF } from '../model/uf';
import { ExternalService } from '../services/external.service';
import { PeopleService } from '../services/people.service';
import { UfService } from '../services/uf.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  states: UF[] = [];
  person: Person = new Person();

  constructor(private statesService: UfService,
    private externalService: ExternalService,
    private peopleService: PeopleService) {
   }

  ngOnInit() {
    this.states = this.statesService.getStates();
    this.person.uf = "";
  }

  checkCEP(value){
    
    if(value.toString().length == 8){
      this.externalService.getCEP(value).subscribe((res)=>{
        if(!("erro" in res)){
          this.person.address = res["logradouro"]
          this.person.uf = res["uf"]
          this.person.city = res["localidade"]
        }
       })

    }
      
  }

  submitForm(form){
    this.peopleService.add(this.person).subscribe((res)=>{},(errr)=>{})
  }


}
