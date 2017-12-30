import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  name = '';
  isHighLight = true;
  evenStyle = { color: 'red', fontSize: '12px' };
  oddStyle = { color: 'black', fontSize: '12px' };
  currentStyle = { circle: !this.isHighLight, square: this.isHighLight };
  isShow = true;
  constructor() { }

  ngOnInit() {
    // const index = this.arr.findIndex(word => word.id === id);
  }

  show(event) {
    this.name = event.target.value;
  }

}
