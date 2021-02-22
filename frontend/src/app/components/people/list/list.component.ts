import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../model/person';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  people: Person[] = []

  constructor(private peopleService: PeopleService,
    private router: Router) { }

  ngOnInit() {
    this.loadPeople();
  }

  loadPeople(){
    this.peopleService.list().subscribe((res)=>{
      this.people = res;
    })
  }

  getById(person){
    this.router.navigate([`/edit/${person.id}`])
  }

  deleteUser(person){
    if(window.confirm(`Deseja excluir o perfil ${person.name}`)){
      this.peopleService.delete(person.Id).subscribe((res)=>{
        alert("Apagado com sucesso")
      })
    }
  }

}
