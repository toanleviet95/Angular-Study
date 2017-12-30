import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html'
})
export class ListPersonComponent implements OnInit {
  listPerson;
  constructor() { }

  ngOnInit() {
    this.listPerson = [
      { name: 'Toan', age: 23 },
      { name: 'Lan', age: 23 },
      { name: 'Thuy', age: 22 }
    ];
  }

}
