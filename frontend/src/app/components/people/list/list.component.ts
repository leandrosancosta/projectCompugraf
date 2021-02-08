import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  people: Person[] = []

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.loadPeople();
  }

  loadPeople(){
    this.peopleService.list().subscribe((res)=>{
      this.people = res;
      console.table(this.people)
    })
  }

}
