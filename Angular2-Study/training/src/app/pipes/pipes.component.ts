import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html'
})
export class PipesComponent implements OnInit {
  birthday = new Date(2015, 7, 25);
  person = {name: 'Toan', age: 30};
  address = Promise.resolve('LV Toan');

  constructor() { }

  ngOnInit() {
  }

}
