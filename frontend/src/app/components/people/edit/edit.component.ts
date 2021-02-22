import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../model/person';
import { UF } from '../model/uf';
import { ExternalService } from '../services/external.service';
import { PeopleService } from '../services/people.service';
import { UfService } from '../services/uf.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  states: UF[] = [];
  person: Person = new Person();
  id: number;
  public mask = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]
  public phoneMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  saving = false;
  constructor(private statesService: UfService,
    private externalService: ExternalService,
    private peopleService: PeopleService,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    this.states = this.statesService.getStates();
    this.id = this.route.snapshot.params['id']

    this.getPerson(this.id);
  }

  getPerson(id){
    this.peopleService.getById(id).subscribe((res)=>{
      this.person = res;
      console.log(this.person)
    })
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

  
  submitForm(form) {
    if (!form.invalid) {
      this.saving = true;
      this.peopleService.edit(this.person).subscribe((res) => { },
        (errr) => {
          alert(errr)
          this.saving = false;
        })
    } else {
      alert("Verifique os dados preenchidos")
    }
  }

}
