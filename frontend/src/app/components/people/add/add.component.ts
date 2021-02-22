import { Component, OnInit } from '@angular/core';
import { truncate } from 'fs';
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
  public mask = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]
  public phoneMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  saving = false;

  constructor(private statesService: UfService,
    private externalService: ExternalService,
    private peopleService: PeopleService) {
  }

  ngOnInit() {
    this.states = this.statesService.getStates();
    this.person.uf = "";
  }

  checkCEP(value: string) {
    if (!value.includes('_')) {
      this.externalService.getCEP(value.replace('-', '')).subscribe((res) => {
        if (!("erro" in res)) {
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
      this.peopleService.add(this.person).subscribe((res) => { },
        (errr) => {
          alert(errr)
          this.saving = false;
        })
    } else {
      alert("Verifique os dados preenchidos")
    }
  }


}
